import React, { Component } from 'react'

import {Card} from 'react-bootstrap'

import {Link} from 'react-router-dom'
import './Recent.css'

export class Recent extends Component {

constructor(props) {
    super(props)

    this.state = {
        IMAGE_API : "https://image.tmdb.org/t/p/w500"   
    }
    console.log(this.props)
}


  

/*


// https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=whiplash&language=de-DE&region=DE
// https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

 getMovies = ()=> {

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)

    .then( data =>{
  
  
      this.setState({
          Movies :  data.data.results
      })
      console.log(this.state.Movies)
    })
    .catch(
  
      error=>{
  
          console.log("surya error")
      }
    )
  
  
  }


componentDidMount(){
this.getMovies()

}
*/

    render() {

        
        return (
            <>
            <h6 style={{color : "white"}}>Recent Movies</h6> 
            <div  className="pb-2  mr-2 d-flex flex-row justify-content-start align-items-start flex-wrap justify-content-between ">
            
            {
     this.props.Movies.map(movies =>
            <Link to={'/movies/'+ movies.id}>
                     
                   <Card  className="m-2" style={{ width: '18rem'}}>
                   <div  key={movies.id} className="cc">
                       <Card.Img  className="image" src={this.state.IMAGE_API + movies.poster_path}     alt="dd"/>

                       <Card.Body>
                         
                       <p >{movies.original_title}</p>
                         
                   </Card.Body>
                       </div>
                     </Card>
            </Link>
                   )
       
                   }
           
            </div>
            </>
        )
    }
}

export default Recent
