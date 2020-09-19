import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Order.css'
import platillo from '../images/hotdog.png'


class Orden extends React.Component {
 render() {
  return (
      <div className="container">
        <div className="order-container">
            <div className="card d-block border-dark order-image text-dark p-3">
                <p className="card-header h2">{this.props.title}</p>
                <img src={platillo}className="card-img" alt="Platillo a ver"/>
                <span className="display-3 ml-4">$13.99</span>
                <div className="card-image-overlay d-flex justify-content-center p-4"> 
                    <a href="/" className="h2 text-dark px-3">-</a>
                    <div className="bg-dark rounded"> <p className="h2 text-light px-4"> {this.props.cantidad} </p></div>
                    <a href="/" className="h2 text-dark px-3">+</a>
                </div>  
            </div>
          <p className="card-text p-3">{this.props.description}</p><br/>
            <div className="d-flex justify-content-center ">
              <Link to="/cart" className="btn btn-outline-dark mr-3">Add to Cart</Link>
              <Link to="/pay"  className="btn btn-dark ml-3">Buy now</Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Orden;

