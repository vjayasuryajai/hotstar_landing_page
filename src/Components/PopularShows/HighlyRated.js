import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './HighlyRated.css'
import  karnan from '../../assests/karnan.jpg'
import  Master from '../../assests/Master.jpg'
import  teddy from '../../assests/teddy.jpg'

export class HighlyRated extends Component {
    render() {
        return (
            <Carousel width="100%"   className="slide" showThumbs={false} autoPlay={true} infiniteLoop={true}   >
                <div className="item">
                    <img src={karnan}  alt="karnan" width ="100%"  height="300px"/>
                    
                </div>
                <div className="item">
                    <img src= {teddy} alt="karnan"  width ="100%"  height="300px"/>
                    
                </div>
                <div className="item">
                    <img src={Master}  alt="karnan" width ="100%"  height="300px" />
                    
                </div>
            </Carousel>
        )
    }
}

export default HighlyRated
