import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <>
      <div style={{ width: "75%", margin: "auto", paddingTop: "150px", cursor: 'pointer' }}>
        <h3>HELP</h3>
        <div className="helppage1">
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
           
              <h4>SHOP AT</h4>
            </div>
          </Link>
          <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
             
              <h4>SHIPPING AND ORDER STATUS</h4>
            </div>
          </Link>
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
             
              <h4>EXCHANGES AND RETURNS</h4>
            </div>
          </Link>
          <Link to="/paymentMethod" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
             
              <h4>PAYMENT</h4>
            </div>
          </Link>
          <Link to="/products" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
             
              <h4>PRODUCT</h4>
            </div>
          </Link>
          <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
           
              <h4>GIFT CARD</h4>
            </div>
          </Link>
          <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
            <div className="helppage2">
           
              <h4>SHOPS AND COMPANY</h4>
            </div>
          </Link>
          <div className="helppage2">
          
            <h4>my company QR</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
