import React from 'react'

export default function MainDashboard() {

  
  return (
    <div className='mainpage'> 
        <div className="container ">
            <div className="row">
                <div className="col-lg-3"><h3>Products</h3><i className="fa-solid fa-cart-shopping"></i><span>0</span></div>
                <div className="col-lg-3"><h3>Sales</h3><i className="fa-solid fa-bag-shopping"></i><span>0</span></div>
                <div className="col-lg-3"><h3>Orders</h3><i className="fa-solid fa-boxes-stacked"></i><span>0</span></div>
            </div>
           <div className="container charts">
            <div className="row">
              <h2>Charts</h2>
            </div>
           </div>
        </div>
    </div>
  )
}
