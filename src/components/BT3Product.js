import React, { Component } from 'react'
import BT3ProductStyle from '../stylesheets/BT3Product.module.css'

export default class BT3Product extends Component {
  render() {
    return (
      <div className={`card text-dark col-4 px-0 ${BT3ProductStyle['bt3-product-card']}`}>
        <img className="card-img-top" src="https://picsum.photos/200" alt="" />
        <div className="card-body">
          <h4 className="card-title">Item One</h4>
          <p className="card-text">$24.99</p>
          <p className="card-text">
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="card-footer">.....</div>
      </div>
    )
  }
}
