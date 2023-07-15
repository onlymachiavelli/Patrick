import { StyleSheet } from "react-native"


import {
    Dimensions
}
 from 'react-native'

 const {height} = Dimensions.get("screen")

 const profile = StyleSheet.create({
    container:{
        width : "100%",
        height , 
        backgroundColor:"white"

    },
    cov :{
        width : "100%" , 
        height : 150, 
        backgroundColor : "#4C9FD5"
    }   ,
    profileContainer:{
        width:170,
        height:170, 
        borderWidth:2,
        borderColor:"white",
        display : "flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        backgroundColor:"white",
        marginTop:-80,
        alignSelf:"center"
    },
    name: {
        color:"#555",
        fontWeight:"bold",
        fontSize:20,
        marginTop:10,
        alignSelf:"center"

    },
    dataContainer:{
        display:"flex" , 
        width :"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        gap:10
    },
    edit:{
        width:"70%",

        padding:10,
        borderRadius:100,
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        textAlign:"center",
        borderWidth:1,
        borderColor:"#4C9FD5",
        alignSelf:"center"

        

    }

 })

 export default profile