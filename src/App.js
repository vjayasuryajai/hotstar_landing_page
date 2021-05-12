import {useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import {AuthProvider} from './Components/Context/AuthContext'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import Abot from './Components/Abot'
import axios from 'axios'

function App() {


const[Movies , setMovies] = useState("")

useEffect (()=>{
  getMovies()

}, [])



const getMovies = ()=> {

  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)

  .then( data =>{

    setMovies(data.data.results)
  })
  .catch(

    error=>{

        console.log("surya error")
    }
  )


}

  return (
<AuthProvider>
    <Router>
    <div >
     <Header />
      
    </div>
     <Switch>
           <Route exact  path='/' >
           <Home  Movies ={Movies} />
           </Route>
           <Route  path='/login'  component={Login}/>
           <Route  path='/SignIn'     component={SignIn}/>
           <Route  exact  path='/movies/:id' render={() => <Abot Movies={Movies} />} /> 
          
     </Switch>
    

    </Router>
    </AuthProvider>
  );
}

export default App;
