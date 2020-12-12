import React, { Component } from 'react'
import BT3Product from './BT3Product'

export default class BT3ProductList extends Component {
  render() {
    return (
      <div className="row py-5 col-9 mx-0">
        <div className="row">
          <BT3Product />
          <BT3Product />
          <BT3Product />
        </div>
        <div className="row mt-5">
          <BT3Product />
          <BT3Product />
          <BT3Product />
        </div>
      </div>
    )
  }
}
