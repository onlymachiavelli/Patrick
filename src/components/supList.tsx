

import * as Native from 'react-native'
import * as React from 'react'
import { relationsStyle } from '../styles'
import Male from './../lottieFiles/Male.json'
import Female from './../lottieFiles/Female.json'
import Lottie from 'lottie-react-native'
import {AddSuper} from './../components'
import {Input} from './'

const Supervisors = () =>{

    //animation ref 
    const animation = React.useRef(null)
    return (
        <Native.ScrollView style={relationsStyle.superList}>
            <Native.Text style={relationsStyle.title}>
                My SuperVisors
            </Native.Text>
            <AddSuper/>


            <Native.View style={relationsStyle.card}>
                <Native.View style={
                    {
                        display: "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center" , 
                        flexDirection:"row"
                    }
                }>
                <Lottie

                    source={Male}
                    style ={relationsStyle.avatar}
                    autoPlay
                    loop
                    ref={animation}

                    />

                    <Native.Text style={relationsStyle.name}>
                        Alaa Eddine Barka
                    </Native.Text>

                </Native.View>
            </Native.View>





            
            
        </Native.ScrollView>
    )
}

export default Supervisors