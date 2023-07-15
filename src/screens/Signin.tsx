import * as React from 'react'

import * as Native from 'react-native'
import {signin} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input } from './../components/index'
import {User} from './../components/svg'
import useSignin from '../hooks/useSignin'
const SignIn = ({navigation} : any) =>{
    const {
        Login,
       email,  password, 
        
    
        setEmail,

        setPassword


       
    } = useSignin(navigation)
    const animationRef = React.useRef<Lottie>(null)
    return (
        <Native.ScrollView style={signin.container}>
            <Header/>

            <Native.View style={signin.logoContainer}>
                <Lottie 
                    source={Lotti}
                    autoPlay
                    loop
                    style={signin.logo}
                    ref={animationRef}
            />

            </Native.View>


            <Native.Text style={
                signin.title
            }>
                Log in to your Vega Account
            </Native.Text>

            <Native.View>

                <Input
                Text={"Enter your email"}
                Type={
                    "emailAddress"
                }
                Secure={false}
                Value={email}
                OnChange={setEmail}



                />


                <Input
                Text={"Enter your password"}
                Type={
                    "password"
                }
                Secure={true}
                
                Value={password}
                OnChange={setPassword}

                />


                <Native.TouchableOpacity
                    style={signin.button}
                    onPress={()=>{
                        Login()
                    }}

                >

                    <Native.Text
                        style={signin.buttonText}
                    >
                        Sign In
                    </Native.Text>  
                </Native.TouchableOpacity>
            </Native.View>


                        
            <Native.TouchableOpacity style={signin.restore} >
                            <Native.Text style={{color:"#555",textDecorationLine:"underline"}}>
                            Forgot your Credentials ?
                            </Native.Text>
                        </Native.TouchableOpacity>


                        <Native.TouchableOpacity style={signin.restore} onPress={()=>{
                            navigation.navigate("Signup")
                        }} >
                            <Native.Text style={{color:"#4C9FD5",fontWeight:"bold",textDecorationLine:"underline"}}>
                            Create a new Account
                            </Native.Text>
                        </Native.TouchableOpacity>

                    
        </Native.ScrollView>
    )
}

export default SignIn