import React, {useState} from 'react'
import './Login.css'
import {Card,Form} from 'react-bootstrap'

import {Link} from 'react-router-dom'


import {useAuth} from '../Components/Context/AuthContext'

function  Login () {



     
const [Name , setName] = useState("")
const [Password , setPassword] = useState("")
const [PasswordConfiration , setPasswordConfiration] = useState("")
const [error, setError] = useState("")

const {signup} = useAuth()


   async function   handleSubmit(e){
      e.preventDefault()


      if(Password !== PasswordConfiration){

        setError("Password is not Matching")
      }


      try{


await signup(Name,Password)

      }
      catch{

        setError("Login Failed")
      }
      
 }

   
    
    

     //   console.log(<AuthContext.Consumer ></AuthContext.Consumer>)
        
        return (
            <div  className="Form">
            <Card className="w-50">  

            <h4  style={{display : "flex" , justifyContent :"center"}}>Please Signup  </h4>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
              
                  <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control  name="Name" value={Name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control  name= "Password"  type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}  />
                </Form.Group>

                <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control  name= "PasswordConfiration" value={PasswordConfiration} onChange={(e)=>setPasswordConfiration(e.target.value)}  />
                </Form.Group>

                
                <Form.Group>
                
                <input className ="btn btn-success" type ="submit"  value="SignUp"/>

               
                </Form.Group> 
                <Link  to='/SignIn'>
                 
                <p>Login</p>
                </Link >
                <span>{error}</span>
                
                </Form>
                </Card.Body>
                </Card>
            </div>
        )
    }





export default Login
