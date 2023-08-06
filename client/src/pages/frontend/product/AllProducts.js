import { Rate } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllProducts() {
    const [allProducts, setAllProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [checkbox, setCheckBOx] = useState([])
    const [newData, setNewData] = useState([])


    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        const uniqueArray = Object.values(
            allProducts.reduce((acc, obj) => {
                acc[obj.category] = obj;
                return acc;
            }, {})
        );
        setCategories(uniqueArray)
    }, [allProducts])


    useEffect(() => {
        checkbox.forEach((category) => {
            let data = allProducts.find((item) => {
                return item.category == category
            })
            setNewData([...newData, data])
        })

    }, [checkbox])

    console.log(newData);


    const getProducts = async () => {
        try {
            await axios.get(`http://localhost:5000/api/products`)
                .then((res) => {
                    setAllProducts(res.data)
                })
        } catch (error) {
            window.toastify(error.response.data.error, "error")

        }
    }



    return (
        <>
            <div className="container">
                <div className="row" style={{ paddingTop: "150px" }}>
                    <div className="col">
                        <h5 className='fw-bold'>Category</h5>
                        <h6 className='text-success'>All Products</h6>
                    </div>
                </div><hr />
                <div className="row ">
                    <div className="col-3 col-lg-2 px-2">
                        {/* brand filter */}
                        <h5 className='ps-3 mt-4'>Categories</h5>
                        <div style={{ maxHeight: 400, overflowY: "auto", marginTop: 12 }}>
                            <ul className="list-group  mb-5 " >
                                {categories.map((item, i) => {
                                    return <li className="list-group-item border-0 text-secondary " key={i}>
                                        <input type="checkbox" className='me-2' onChange={() => setCheckBOx([...checkbox, item.category])} />
                                        {item.category}
                                    </li>
                                })}
                            </ul>
                        </div>
                        {/* star rating filter*/}
                        <h5 className='ps-3 mt-3'>Ratings</h5>
                        {/* <ul className="list-group mb-5 " >
                            {[5, 4, 3, 2, 1].map((val, i) => <li className="btn btn-link btn-sm mb-1" key={i} onClick={() => handleRating(val)}><Rate allowHalf value={val} /></li>)}

                        </ul> */}

                    </div>

                    {/* product cards */}
                    <div className="col">
                        <div className="text-secondary">Total items: {allProducts.length}</div>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 pb-4 pt-3">
                            {allProducts.map((elements, i) => {
                                return <div className="col">
                                    <Link className='text-decoration-none text-dark' to={`/products/details`}>
                                        <div className="card border-white shadow rounded-4 overflow-hidden " >
                                            <div className="overflow-hidden">
                                                <img src={elements.images[0]} style={{ height: 300 }} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="card-body px-2 px-lg-3">
                                                <div className="card-title text-success">{elements.name.length > 25 ? elements.name.slice(0, 25) + "..." : elements.name}</div>
                                                <h6 className="text-success">$ {elements.price}</h6>
                                                <Rate allowHalf value={elements.ratings.length} />
                                                <div className="stock-discount text-secondary mt-2">
                                                    <div><b>stock</b> ({elements.stock})</div>
                                                    <div><b>Category</b> ({elements.category})</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
