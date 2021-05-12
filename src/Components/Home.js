import React, { Component } from 'react'
import './Home.css'
import Recent from './PopularShows/Recent'

import HighlyRated from '../Components/PopularShows/HighlyRated'

export class Home extends Component {
    render() {
        return (

            <>
            <div className="Home">
            
               <HighlyRated />
               <Recent  Movies = {this.props.Movies}/>
               </div>

               

 </>
        )
    }
}

export default Home





































































