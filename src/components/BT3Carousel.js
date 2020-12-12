import React, { Component } from 'react'

export default class BT3Carousel extends Component {
  render() {
    return (
      <div id="bt3-content-carousel" className="carousel slide col-9 mt-5" data-interval={500}  style={{width: '100%', height: '350px', overflow: 'hidden', backgroundColor: 'white'}} data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#bt3-content-carousel" data-slide-to={0} className="active" />
          <li data-target="#bt3-content-carousel" data-slide-to={1} />
          <li data-target="#bt3-content-carousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/236x/a4/64/f0/a464f071a050a206b9f06931c83df144.jpg" className='d-block w-100' alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OXIuQI24EnqgtoHyCpvvkKR6inqlbqg8uQ&usqp=CAU" className='d-block w-100' alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRzuEMjkOloWkACEE7cSo4tcfuPbV3NHeUQ&usqp=CAU" className='d-block w-100' alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#bt3-content-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#bt3-content-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
