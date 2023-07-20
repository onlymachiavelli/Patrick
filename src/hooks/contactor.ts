import * as React from 'react'

import axios from 'axios'
import {AsyncStorage} from './../hooks'


const useChatter = () =>{

    //the point is to send message and receive ones 
    const [message, setMessage] = React.useState("")



    
    const SendAndReceive = async () =>{
        const ip : any = await AsyncStorage.GetOne("ip")
        if (!ip) alert("Error getting ip ")
        
        await axios.post(`http://${ip}:8000`,{
            ch : message
        }).then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
        
    }
    
    return {
        message , setMessage, SendAndReceive
    }
}

export default useChatter