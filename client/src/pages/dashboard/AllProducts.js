import { Rate } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function AllProducts() {
  const [products, setProducts] = useState([])

  const { userId } = useParams()
  console.log(userId);
  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    try {
      await axios.get(`http://localhost:5000/api/products/yours/${userId}`)
        .then((res) => {
          setProducts(res.data)
        })
    } catch (error) {
      window.toastify(error.response.data.error, "error")
    }

  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h2 className='text-success fw-bold'>Your Products</h2>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 pb-4 pt-3">
          {products.map((elements, i) => {
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
    </>
  )
}
