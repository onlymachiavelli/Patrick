import * as React from 'react'

import * as Native from 'react-native'
import {signin} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input } from './../components/index'
import {User} from './../components/svg'
const SignIn = ({navigation} : any) =>{

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


                />


                <Input
                Text={"Enter your password"}
                Type={
                    "password"
                }
                Secure={true}
                

                />


                <Native.TouchableOpacity
                    style={signin.button}

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