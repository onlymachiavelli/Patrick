
import * as React from 'react'
import axios from 'axios'
import * as AsyncStorage from './AsyncStorage'

const useSignUp = () =>{

    const [fullname , setFname] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [phone , setPhone] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [bday, setBday] = React.useState("")
    const [type, setType] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [day, setDay] = React.useState('1')
    const [month, setMonth] = React.useState('1')
    const [year, setYear] = React.useState('1950')



    const MakeLogin = async () =>{
        const body : any ={
            fullname : fullname, 
            email : email,
            phone : phone,
            gender : gender,
            address : address, 
            bday : `${year}-${month}-${day}`,
            type : type,
            password : password
        }
        //check the data before sending the request, 
        //do it later, 
        console.log("Hello",body)
        return 
         const ip : any = AsyncStorage.GetOne("ip")
        axios.post(`http://${ip}:3000/users` , body).then((res)=>{
            console.log(res)
            if (res.status == 200) {
                AsyncStorage.SetOne("token" , res.data.token)
                alert("You're account is created, now heading to the dashboard")
            }
            else {
                alert("Please fill the form with valid data")
            }
            
            return res.data
        })
        .catch((e:any)=>{
            console.log((e))
            alert("I guess there's an internal error , osber wala rabbi maak")
            return e.response 
        })
    }   

    

    return {
        MakeLogin,
        fullname,email,phone, gender , address , bday , type,  password, 
        
        setFname, 
        setEmail,
        setPhone,
        setGender,
        setAddress,
        setBday,
        setType,
        setPassword,
        


        day, year, month, 
        setDay, setYear, setMonth,

        pass, setPass
    }
}

export default useSignUp