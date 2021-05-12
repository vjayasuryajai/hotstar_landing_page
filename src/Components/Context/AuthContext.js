import React ,{useState,useContext,useEffect}from 'react'
import { auth } from '../../firebase'

       

const AuthContext = React.createContext()


export function useAuth(){


    return useContext(AuthContext)
}


       export  const  AuthProvider =({children}) =>{

               const[user ,setcurrentuser] =useState()
               const[Loading ,setLoading] =useState(true)



               useEffect(() =>   {

              const unsubscribe =  auth.onAuthStateChanged(user =>{
                    setcurrentuser(user)
                    setLoading(false)
                    
                })

                return unsubscribe

               },[])


               function signIn(email,password){
                console.log("signin")
               return auth.signInWithEmailAndPassword(email,password)
               }

function signup(email,password){
 console.log("ww")
return auth.createUserWithEmailAndPassword(email,password)
}


    const  Logout =()=>{

        auth.signOut()
    }

const value={

    signup,
    signIn,
    Logout,
    user
}

           return (
               <AuthContext.Provider value={value}>
                { !Loading && children}
               
               </AuthContext.Provider>
           )
       }
       
       export default AuthContext
       