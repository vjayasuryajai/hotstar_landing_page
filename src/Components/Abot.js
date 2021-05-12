import React, { Component } from 'react'
import { withRouter } from "react-router";
import {Card} from 'react-bootstrap'
import './Abot.css'

export class Abot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            IMAGE_API : "https://image.tmdb.org/t/p/w500"   
        }
        console.log(this.props)
    }
    


//const {match:{params:{id}}} = this.props

    render() {
        const { id } = this.props.match.params
       
       // const Data = Movies.filter(data => data.id === id )
       console.log(this.props.Movies)
       console.log(this.props.Movies.filter(data => data.id == this.props.match.params.id))
        return (
            <div >
        
           
{
 this.props.Movies.filter(data => data.id == id)
    .map(mov =>
        
        <div>
        <Card  className="d-flex super" >
        
        <Card.Img  src={this.state.IMAGE_API+mov.backdrop_path} className="im"/>
        <div className="overview">
        <p></p>
        <h5 > {mov.overview}</h5>
        </div>
        
        </Card>
          
        </div>
        )
}


            </div>
        )
    }
}

export default withRouter(Abot)
