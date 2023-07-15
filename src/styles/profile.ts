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
        backgroundColor:"white",
    },
    cov :{
        width : "100%" , 
        height : 350, 
        //shadow 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        borderRadius:40,
        paddingTop:60,
        padding:10
    }   ,
    proInfo:{
        width : "100%", 
        display :"flex" , 
        alignItems:"center", 
        justifyContent:"space-between",
        flexDirection:"row",
        gap :10

    },
    profileBorder:{
        width:90,
        height:90,
        borderRadius:100,
        display:"flex" , 
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    name :{
        color:"white" , 
        fontWeight:"bold",
        fontSize:20
    },
    id:{
        color:"white" , 
        fontSize:10,
        padding:2
    },
    data : {
        color:"white" , 
        fontSize:14,
        padding:2
    },
    editButton:{
        width :"60%" , 
        padding:10,
        borderWidth:1 ,
        borderColor:"white" , 
        borderRadius:100 ,
        alignSelf:"center" , 
        display:"flex" , 
        alignItems:"center" , 
        justifyContent:"center",
        backgroundColor:"#ffffff33",
        marginTop:20
        
    },
    editText:{
        color :"white"
    }
    

 })

 export default profile