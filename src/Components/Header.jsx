import React from 'react'
import './Header.css'
import Hotstar from "../assests/Hotstar.jpg"
import '../firebase'
import {Link ,useHistory} from 'react-router-dom'
import {useAuth} from '../Components/Context/AuthContext'

function Header() {

  const {user,Logout} = useAuth()
  const History =useHistory()
  console.log(user)

    const  handlelogOut=(e )=>{
console.log("logout")
History.push('/')
 Logout()

  }

        return (
            <div className="Header">
                <div className ="Logo"  >
                 <img   src ={Hotstar} alt="Logo" width="60px" />
                </div>
                   


                <div className ="Search">
                <input className="Search" type="text" placeholder="Search.." />
                </div>
                
                {
                 user ?
                 <div style={{color: "white"}}> 
                 {user.email}
                 <span onClick={handlelogOut} className="btn btn-danger">LogOut</span>
                 </div>
                 

            : 
            <div className ="Login">
            <Link to='/login'>
             <button className="btn btn-success">Login</button>
             </Link>
            </div>
                }
                
                
            </div>
        )
    }


export default Header
