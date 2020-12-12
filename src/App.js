import React, { Component } from 'react'
import BT3Header from './components/BT3Header'
import BT3Sidebar from './components/BT3Sidebar'
import BT3Content from './components/BT3Content'
import BT3Footer from './components/BT3Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <BT3Header />
        <div className="row">
          <BT3Sidebar />
          <BT3Content />
        </div>
        <BT3Footer />
      </div>
    )
  }
}
