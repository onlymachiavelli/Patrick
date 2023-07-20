import * as React from 'react'
import * as Native from 'react-native'

import { Header } from './../components'
import {chatStyle} from './../styles'
import {Sender, Receiver,ProfileHeader, SideMenu , Footer } from './../components'
import { Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import useGetMe from '../hooks/useGetme'
import useChatter from '../hooks/contactor'
const Chat = ({navigation} : any) =>{
    const screenHeight = Native.Dimensions.get('window').height
  const scrollViewHeight = screenHeight * 0.8
    const [open, setOpen] = React.useState(false)
  const {user, GetMe} = useGetMe(navigation)
  React.useEffect(()=>{
        GetMe()
  }, [])

  const  {
    message , setMessage, SendAndReceive
        } = useChatter()
    return (
        <Native.ScrollView style={chatStyle.container}>
             <ProfileHeader

                Display={setOpen}
                Status={open}
                ToProfile={()=>{
                    navigation.navigate("Profile")
                }}
                Name={user ? user.user.fullname : "Loading"}
                Gender={user ? user.user.gender : "Loading"}


                />

            <Native.ScrollView style={{
                width : "100%" , 
                height: scrollViewHeight,
                borderBottomWidth:1, 
                borderColor:"#ccc",
            }}>
                <Sender/>
                <Sender/>
                <Receiver/>
                <Receiver/>
                <Sender/>
                <Receiver/>


                <Sender/>
                <Sender/>
                <Receiver/>
                <Receiver/>
                <Sender/>
                <Receiver/>

                <Sender/>
                <Sender/>
                <Receiver/>
                <Receiver/>
                <Sender/>
                <Receiver/>
            </Native.ScrollView>

            <Native.View style={chatStyle.message}>
                <Native.TextInput

                    placeholder='Enter your message'
                    value={message}
                    onChange={(e)=>{
                        
                        setMessage(e.nativeEvent.text)


                    }}
                    style={chatStyle.input}

                    
                />

            <Native.TouchableOpacity style={chatStyle.sendbtn}>
            <FontAwesome name="send" size={24} color="white" />
            </Native.TouchableOpacity>
            </Native.View>

            <SideMenu
            
               Hide={
                     setOpen
               }
               Display={open}
            />
        </Native.ScrollView>
    )
}

export default Chat