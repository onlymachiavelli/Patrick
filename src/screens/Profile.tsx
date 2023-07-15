import * as React from 'react'
import * as Native from 'react-native'
import {Header} from './../components/'
import { profile } from '../styles'
import Lottie from 'lottie-react-native'
import Male from './../lottieFiles/Male.json'
import {InfoCard} from './../components'
const Profile = () =>{


    /*
    
        <Lottie
                
                source={Male}
                loop
                autoPlay
                style={{
                    width:200,
                    height:200
                    ,}}
                ref={animationRef}

                />


                <Native.View style={
                profile.cov
            }>

            </Native.View>

            <Native.View style={profile.profileContainer}>
                
                
                
                </Native.View>

                <Native.Text style={profile.name}>
                    Alaa Barka ( Patient )
                </Native.Text>

                <Native.TouchableOpacity>

                <Native.TouchableOpacity style={profile.edit}>
                    <Native.Text style={{
                        color:"#4C9FD5"
                    }}>
                    Edit Profile
                    </Native.Text>
                </Native.TouchableOpacity>
                </Native.TouchableOpacity>

                


                <Native.View style={profile.dataContainer}>
                <InfoCard
                    Title="Email Address"
                    Data="mralaabarka@gmail.com"
                />
                <InfoCard
                    Title="Phone Number"
                    Data="54324884"
                />
                <InfoCard
                    Title="Phone"
                    Data="54324884"
                />
                <InfoCard
                    Title="Birthday"
                    Data="2002-04-07"
                />
                <InfoCard
                    Title="Gender"
                    Data="Male"
                />
                </Native.View>
    */
    //create a ref 
    const animationRef = React.useRef(null)
    return (
        <Native.View style={profile.container}>
            
        </Native.View>
    )
}

export default Profile