import * as React from 'react'
import axios from 'axios'
import * as AsyncStorage from './AsyncStorage'
import { ToastAndroid } from 'react-native'
const useSignin = () =>{

    const [email , setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
   


    const Login = async () =>{
        const body : any ={
       
            email : email,   
            password : password
        }
        //check the data before sending the request, 
        //do it later, 
        console.log(body)
         
        axios.post("http://192.168.1.48:3000/users/login" , body).then((res)=>{
            console.log(res)
            if (res.status == 200) {
                AsyncStorage.SetOne("token" , res.data.token)
                ToastAndroid.show(
                    "Authenticated, Heading to your profile", 
                    ToastAndroid.SHORT
                )
            }
            else {
                ToastAndroid.show(
                    "Please Check your credentials", 
                    ToastAndroid.SHORT
                )
            }
            
            return res.data
        })
        .catch((e:any)=>{
            console.log((e))
            ToastAndroid.show(
                "Please Check your credentials", 
                ToastAndroid.SHORT
            )
            return e.response 
        })
    }   

    

    return {
        Login,
       email,  password, 
        
    
        setEmail,

        setPassword


       
    }
}

export default useSignin