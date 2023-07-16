import * as React from 'react'

import * as Native from 'react-native'
import { Footer } from '../components'
import { heart } from '../styles'
import {ProfileHeader} from '../components'
//import lineargraph 
const HeartStatus = ({navigation} : any) =>{
        const data = [20, 30, 25, 35, 40, 30, 50];
  const contentInset = { top: 20, bottom: 20 };

  return (
    <Native.View style={heart.container}>

      <ProfileHeader
      ToProfile={()=>{

        navigation.navigate("Profile")
      }}  
      />
      {/* Your other components */}


      <Footer/>
    </Native.View>
  )
    
}


export default HeartStatus