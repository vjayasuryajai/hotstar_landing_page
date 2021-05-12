import React, {useState} from 'react'
import './Login.css'
import {Card,Form} from 'react-bootstrap'
import  {useHistory} from 'react-router-dom'
import {useAuth} from '../Components/Context/AuthContext'

function  SignIn () {



     
const [Name , setName] = useState("")
const [Password , setPassword] = useState("")
const [error,setError] =  useState("")
const History =useHistory()

const {signIn} = useAuth()


   async function   handleSubmit(e){
      e.preventDefault()


     

      try{


await signIn(Name,Password)
History.push("/")
      }
      catch{

        if(Name=== "" || Password === ""){
            setError("Please Enter UserName eand password")
         }
        
         else {



         setError("Login Failed")
         }

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
                <input className ="btn btn-success" type ="submit"  value="Login"/>
                </Form.Group> 
               
                
                </Form>
                </Card.Body>
                {error}
                </Card>

            </div>
        )
    }





export default SignIn
