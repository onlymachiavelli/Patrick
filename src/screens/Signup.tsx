import * as React from 'react'

import * as Native from 'react-native'
import {signup, components} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input, SmallInp } from './../components/index'
import {User} from './../components/svg'

import DropDownPicker from 'react-native-dropdown-picker'
import useSignUp from '../hooks/Signup'


const Signup = ({navigation}:any) =>{

    const animationRef = React.useRef<Lottie>(null)


    const [genders, setGenders] = React.useState([
        {
          label : 'Male' , value : 'male',
        }, 
        {
          label : 'Female' , value : 'female'
        }
  
    ])
    const [open, setOpen] = React.useState(false)
    //
    const {
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
      setDay, setYear, setMonth,pass, setPass
  } = useSignUp()
    return (
        <Native.SafeAreaView style={signup.container}>
            <Header/>

            {
                /*
                
                    <Native.View style={signup.logoContainer}>
                <Lottie 
                    source={Lotti}
                    autoPlay
                    loop
                    style={signup.logo}
                    ref={animationRef}
            />

            </Native.View>
                */
            }


            <Native.Text style={
                signup.title
            }>
                Create a VegaCare Account
            </Native.Text>

            <Native.View>

            <Input Text={"Enter your Full name"} />
            <Input Text={"Enter your Email"} />
            <Input Text={"Enter your Phone Number"} />
            <Input Text={"Enter your Address"}/>


            
            
           <Native.View style={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
            <SmallInp Text={"Day"} Number={true} Length={2} />
            <SmallInp Text={"Month"} Number={true} Length={2} />
            <SmallInp Text={"Year"} Number={true} Length={4} />

           </Native.View>

           <Native.View style={{ position: 'relative', zIndex: 1 }}>
            {/* Other content or components */}
            <DropDownPicker
                open={open}
                value={gender}
                items={genders}
                placeholder='Select your gender'
                setOpen={setOpen}
                setValue={setGender}
                setItems={setGenders}
                style={{
                marginTop: 10,
                marginBottom: 10,
                width: "90%",
                alignSelf: "center",
                zIndex: 2, // Adjust the zIndex value
                }}
            />
            </Native.View>



            <Input Text={"Enter your Password"} Type={"emailAddress"}/>
            <Input Text={"Confirm your Password"} Type={"emailAddress"}/>
            {
                //bday
            }
            {
                //gender
            }


                <Native.TouchableOpacity
                    style={signup.button}

                >

                    <Native.Text
                        style={signup.buttonText}
                    >
                        Create the Account
                    </Native.Text>  
                </Native.TouchableOpacity>
            </Native.View>


                        



                        <Native.TouchableOpacity style={signup.restore} onPress={()=>{
                            navigation.navigate("Signin")
                        }} >
                            <Native.Text style={{color:"#4C9FD5",fontWeight:"bold",textDecorationLine:"underline"}}>
                            Already have an Account ?
                            </Native.Text>
                        </Native.TouchableOpacity>

                    
        </Native.SafeAreaView>
    )
}

export default Signup