

import * as Native from 'react-native'
import * as React from 'react'
import { relationsStyle } from '../styles'
import Male from './../lottieFiles/Male.json'
import Female from './../lottieFiles/Female.json'
import Lottie from 'lottie-react-native'
import {AddSuper} from './../components'
import {Input} from './'
import { useGetMe, useRelations } from '../hooks'
import { User } from './svg'

const Supervisors = () =>{
    const {name, setName, 
        phone, setPhone,
        relations, setRelations,
        SaveRelation,
        AcceptOrRefuse,
        GetRelations} = useRelations()

    React.useEffect(()=>{
        //GetRelations()
    }
    ,[])

    
    //animation ref 
    const animation = React.useRef(null)
    return (
        <Native.ScrollView style={relationsStyle.superList}>

            <AddSuper/>
            <Native.Text style={relationsStyle.title}>
                My SuperVisors
            </Native.Text>
            {
                [{fullname:"Bob",gender:"male"},
                 {fullname:"Lola",gender:"female"},
                 {fullname:"Micheal",gender:"male"},
                 {fullname:"Yassine",gender:"male"},
                 {fullname:"Jean",gender:"male"}
                                            ].map((item : any)=> 
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

                                                    source={item.gender=="male"?Male:Female}
                                                    style ={relationsStyle.avatar}
                                                    autoPlay
                                                    loop
                                                    ref={animation}

                                                    />

                                                    <Native.Text style={relationsStyle.name}>
                                                    {item.fullname}
                                                    </Native.Text>

                                                </Native.View>
                                            </Native.View>
            )}
        </Native.ScrollView>
    )
}

export default Supervisors