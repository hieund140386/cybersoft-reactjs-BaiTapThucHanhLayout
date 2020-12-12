import React, { Component } from 'react'

export default class BT3Sidebar extends Component {
  render() {
    return (
      <div className="col-3 px-0 py-3">
        <h3 className="text-center mb-3">Shop Name</h3>
        <ul className="nav flex-column w-75 mx-auto">
          <li className="nav-item border border-silver">
            <a className="nav-link" href="#">Category 1</a>
          </li>
          <li className="nav-item border border-silver border-top-0 border-bottom-0">
            <a className="nav-link" href="#">Category 2</a>
          </li>
          <li className="nav-item border border-silver">
            <a className="nav-link" href="#">Category 3</a>
          </li>
        </ul>
      </div>
    )
  }
}
