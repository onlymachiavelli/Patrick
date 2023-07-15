import * as React from 'react'
import * as Native from 'react-native'
import {Header} from './../components/'
import { profile } from '../styles'
import Lottie from 'lottie-react-native'
import Male from './../lottieFiles/Male.json'
import {InfoCard} from './../components'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from './../lottieFiles/logo.json'
import {AntDesign, Entypo,FontAwesome, Feather ,MaterialCommunityIcons ,FontAwesome5   } from '@expo/vector-icons'
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
                
            <LinearGradient
            style={profile.cov}
        // Background Linear Gradient
        colors={['#87CEEB', '#1E90FF']}

        //degree 45degree 
        start={{ x: 0, y: 0 }}
      >
      
        <Native.View style={profile.proInfo}>
            <Native.View style={profile.profileBorder}>
                <Lottie
                    
                    source={Male}
                    loop
                    autoPlay
                    style={{
                        width:110,
                        height:110
                        ,}}
                    ref={animationRef}

                    />
            </Native.View>

            <Native.View>
                <Native.Text style={profile.name}>
                    Alaa Eddine Barka
                </Native.Text>

                <Native.Text style={profile.id}>
                <AntDesign name="user" size={10} color="white" /> ID:@123456789
                </Native.Text>
                <Native.Text style={profile.data}>
                    <AntDesign name="enviroment" size={13} color="white" /> 24 Rue Wadhraf Darfadhal Soukra
                </Native.Text>

                <Native.Text style={profile.data}>
                    <FontAwesome name="phone" size={15} color="white" /> 54324884
                </Native.Text>

                <Native.Text style={profile.data}>
                    
                    <Native.View style={{
                        width : 10, 
                        height : 10,
                        borderRadius:100, 
                        backgroundColor:"#B5170D",
                        
                    }}>
                        
                    </Native.View>

                     {"  "} Device is Disconnected
                </Native.Text>
            </Native.View>


            <Native.View></Native.View>
            <Native.View></Native.View>
            <Native.View></Native.View>
            <Native.View style={{
                alignContent:"flex-end",
                justifyContent:"flex-end",
                zIndex:100

            }}>
                <Native.TouchableOpacity
                    style={{
                        position:"absolute",
                        right:0,
                        top:-50
                    }}
                >
                    
                    <Entypo  name="menu" size={30} color="white" />    
                </Native.TouchableOpacity>
            </Native.View>
        </Native.View>

        <Native.TouchableOpacity style={profile.editButton}>
            <Native.Text style={profile.editText}>
            <Feather name="edit" size={16} color="white" /> Edit Profile
            </Native.Text>
        </Native.TouchableOpacity>


        <Native.View
            style={profile.numberBlock}
        >

            <Native.TouchableOpacity style={profile.buttonData}>
                <Native.View>
                <MaterialCommunityIcons name="google-circles-communities" size={50} color="white" />
                </Native.View>
            
            <Native.Text style={profile.buttonDataText}>
                180
            </Native.Text>

            <Native.Text style={profile.buttonDataText}>
                SUPERVISORS
            </Native.Text>
            </Native.TouchableOpacity>

            <Native.TouchableOpacity style={profile.buttonData}>
                <Native.View>
                <FontAwesome5 name="heartbeat" size={50} color="white" />
            </Native.View>
            
            <Native.Text style={profile.buttonDataText}>
                78%
            </Native.Text>

            <Native.Text style={profile.buttonDataText}>
                HEALTH : STABLE
            </Native.Text>
            </Native.TouchableOpacity>

        </Native.View>
      </LinearGradient>

      
      <Native.Text style={{
        fontSize:20,
        textAlign:"center",
        padding:20
      }}>
        It's quite for now.
      </Native.Text>
      <Native.View style={{alignSelf:"center"}}>
        <Lottie
            source={Logo}
            loop
            autoPlay
            style={{
                width:200,
                height:200,}}
                ref={animationRef}
        />
      </Native.View>
        </Native.View>
    )
}

export default Profile