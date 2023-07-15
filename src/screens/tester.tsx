import * as Native from 'react-native'

import * as React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const {height} = Native.Dimensions.get("window")


const useTester = () =>{


    const [address, setAdd]  = React.useState("")

    const [color, setColor]= React.useState("#004a9e")
    const [ping, setPing] = React.useState("Click to ping the back")
    const Ping = async () =>{
        
        axios.get(`http://${address}:3000/ping?name=alaa` ).then((res) => {
            console.log(address)
            
            if(res.status == 200){
                setColor("#87CEEB")
                setPing("Backend is up and running")
            }
            else{
                setColor("#FF1E1E")
                setPing("Backend is down")
            }
        }).catch((e:any)=>{
            setColor("#FF1E1E")
            setPing("Backend is down")
        })
    }
    return {
        address,
        setAdd, 
        color, 
        setColor, 
        ping, 
        setPing, 
        Ping,

    }

}



const Tester = ({navigation} :any) =>{

    const {
        address,
        setAdd, 
        color, 
        setColor, 
        ping, 
        setPing, 
        Ping,
        
    } = useTester()
    const [Caches, setCache] : any = React.useState([])


    React.useEffect(() => {
        
        AsyncStorage.getItem("ip").then((res:any)=>{setAdd(res)})

        AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiGet(keys))
        .then((result : any) => {
            setCache(result)
        })
        .catch(err => console.log(err))
    } , [])
    return (
        <Native.ScrollView
            style={{
                width : "100%" , 
                height,
            
            
            }}
        >

            <Native.Text style={{
                textAlign : "center", 
                fontWeight :  "bold" ,
                fontSize:30,
                paddingTop : 10,
            }}>
                Tester 
            </Native.Text>


            <Native.TextInput 
            style={{
                width: "80%",
                backgroundColor: "#eee",
                padding: 10,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 10,
                alignSelf: "center",
                // iOS shadow
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0.5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                // Android elevation
                elevation: 6,
                

                


            }}
                //numeric values 

                placeholder='Enter the backend IP Address'
                value={address}
                onChangeText={(e: any) => {

                    setAdd(e)
                }}
            >
            </Native.TextInput>


            <Native.TouchableOpacity
            onPress={()=>{
                AsyncStorage.setItem("ip" , address)
                .then(() => {
                    setCache([...Caches, address ])

                }
                )
                
            }}
            
                style={{
                    backgroundColor: "#004a9e",
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 10,
                    alignSelf: "center",
                    // iOS shadow
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0.5,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 6,
                    // Android elevation
                    elevation: 6,
                    width : "80%" ,
                    alignItems : "center",
                }}
            >

                <Native.Text
                    style={{
                        color : "white"
                    
                    }}
                >
                    Set IP Address
                </Native.Text>




                
            </Native.TouchableOpacity>





            <Native.TouchableOpacity
            
            style={{
                backgroundColor: "#FF1E1E",
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
                alignSelf: "center",
                // iOS shadow
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0.5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                // Android elevation
                elevation: 6,
                width : "80%" ,
                alignItems : "center",
            }}


            onPress={()=>{
                AsyncStorage.clear()
                .then(() => {
                    setCache([])

                    Native.ToastAndroid.show(
                        "Cache Cleared",
                        Native.ToastAndroid.SHORT
                    )

                })
            }}
        >

            <Native.Text
                style={{
                    color : "white"
                
                }}
            >
                Clear Cache
            </Native.Text>

            </Native.TouchableOpacity>


            {

                //ping the backend button 
            }


<Native.TouchableOpacity
            
            style={{
                backgroundColor: color,
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
                alignSelf: "center",
                // iOS shadow
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0.5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                // Android elevation
                elevation: 6,
                width : "80%" ,
                alignItems : "center",
            }}

            onPress={async()=>{
                await Ping()

            }}
        >

            <Native.Text
                style={{
                    color : "white"
                
                }}
            >
                {
                    ping
                }
            </Native.Text>

            </Native.TouchableOpacity>



            <Native.Text style={{
                textAlign : "center", 
                fontWeight :  "bold" ,
                fontSize:20,
                paddingTop : 30
            }}>
                My Current Caches 
            </Native.Text>
            <Native.View style={{
                width : "80%", 
                alignSelf:"center"
            }}>

                {
                    Caches.map((item : any, index: any) => {
                        return (
                            <Native.View
                                key={index}
                                style={{
                                    flexDirection : "row",
                                    justifyContent : "space-between",
                                    padding : 10,
                                    borderBottomColor : "#ccc",
                                    borderBottomWidth : 1,
                                    marginHorizontal : 10
                                }}
                            >
                                <Native.Text>
                                    {item[0]}
                                </Native.Text>
                                <Native.Text>
                                    {item[1].substr(0, 20) + "..."}
                                </Native.Text>
                            </Native.View>
                        )
                    }
                    )
                }
            </Native.View>
        </Native.ScrollView>
    )   
}

export default Tester