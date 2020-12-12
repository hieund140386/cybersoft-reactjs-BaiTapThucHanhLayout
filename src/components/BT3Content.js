import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3ProductList from './BT3ProductList'
import BT3ContentStyle from '../stylesheets/BT3Content.module.css'

const bt3Content = BT3ContentStyle['bt3-content']

export default class BT3Content extends Component {
  render() {
    return (
      <div className={`col-9 ${bt3Content}`}>
        <BT3Carousel />
        <BT3ProductList />
      </div>
    )
  }
}
