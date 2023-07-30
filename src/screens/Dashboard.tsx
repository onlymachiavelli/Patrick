import * as React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import * as Native from 'react-native'
import { ProfileHeader, Footer, SideMenu } from '../components'
import { useGetMe } from '../hooks'
import Graph from '../components/Graph'
import MapView, {Marker} from 'react-native-maps'
const { height } = Dimensions.get("screen")
import * as Location from 'expo-location'
import Female from './../lottieFiles/Female.json'
import Male from './../lottieFiles/Male.json'
import Lottie from 'lottie-react-native'
const Dashboard = ({ navigation }: any) => {
  const { GetMe, user } = useGetMe(navigation);
  const [open, setOpen] = React.useState(false);
  const [location, setLocation]:any = React.useState(null)
  const [errorMsg, setErrorMsg] :any= React.useState(null)
  //create animation ref 
    const animationRef = React.useRef(null)
  React.useEffect(()=>{
    (async () => {
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })()
  })
  React.useEffect(() => {
    GetMe()

   
  }, [])

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(location)
  return (
    <View style={{ width: "100%", maxHeight:height,height:height, backgroundColor: "white" }}>
      <ProfileHeader
        Display={setOpen}
        Status={open}
        ToProfile={() => {
          navigation.navigate('Profile');
        }}
        Name={user ? user.user.fullname : 'Loading'}
        Gender={user ? user.user.gender : 'Loading'}
      />

      

      {/* Replace Native._ScrollView with ScrollView */}
      <ScrollView style={{ width: "100%" ,maxHeight:"78%" ,paddingTop:10,  }}>
        <View style={{
          width: "90%",
          height: "auto",
          borderWidth: 1,
          borderColor: "#eee",
          alignSelf: "center",
          borderRadius: 20,

        }}>
          {
            /*
            
            <Text style={{ fontSize: 20, padding: 10 }}>
            Hey {user ? user.user.fullname : "Loading name"}, Your Health is Stable, nothing To worry About.
          </Text>
            */
          }

          <MapView 
            style={{

                width:"100%",
                height:200,
                borderRadius:20,
            }}

            
            //initial place 
            initialRegion={
                {
                    latitude: 33.8869,
                    longitude: 9.5375,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }
            }
          >
            <Marker
                coordinate={{

                    latitude:location ? location.coords.latitude : 0,
                    longitude:location ? location.coords.longitude : 0
                }}

                title={"My Location"}
                description={"My Location"}


            >

                <Lottie
                    source={user ? (user.user.gender === "male"?Male : Female) : Male}
                    ref={animationRef}
                    style={{
                        width:50,
                        height:50 
                    }}
                />


            </Marker>

          </MapView>
          
        </View>

        <Native.TouchableOpacity 
            onPress={()=>{
                navigation.navigate("Heart")
            }}
        >
        <Native.View style={{
        width : "90%" , 
        height : 180 ,
        alignSelf:"center",
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center" , 
        flexDirection:"column" ,
        paddingRight:10,
        borderWidth:1,
        borderColor:"#eee",
        backgroundColor:"#F63C3C", 

        
        borderRadius:5,
        marginTop:10
    }}>

        <Native.Text style={{width  :"100%" , textAlign:"left",paddingLeft:20,color:"white",
    paddingTop:50}}>
            My Blood Pressure 
        </Native.Text>
        <Graph
            Color={"white"}

            Labels={[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
              ]}

              DATA={[30, 1, 4, 8, 10, 22, 5, 66, 77, 88, 20, 0, 22, 78, 120]}
        />
    </Native.View>
        </Native.TouchableOpacity>



    <Native.TouchableOpacity>
    <Native.View style={{
        width : "90%" , 
        height : 180 ,
        alignSelf:"center",
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center" , 
        flexDirection:"column" ,
        paddingRight:10,
        borderWidth:1,
        borderColor:"#eee", 
        marginTop:10
    }}>

        <Native.Text style={{width  :"100%" , textAlign:"left",paddingLeft:20,color:"blue",
    paddingTop:50}}>
            My Oxygen Pressure 
        </Native.Text>
        <Graph
            Color={"blue"}
        />
    </Native.View>
    </Native.TouchableOpacity>


    <Native.View style={{
        width : "90%" , 
        height : 180 ,
        alignSelf:"center",
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center" , 
        flexDirection:"column" ,
        paddingRight:10,
        borderWidth:1,
        borderColor:"#eee", 

        
        borderRadius:5,
        marginTop:10
    }}>

        <Native.Text style={{width  :"100%" , textAlign:"left",paddingLeft:20,color:"orange",
    paddingTop:50}}>
            My Temperature 
        </Native.Text>
        <Graph
            Color={"orange"}
        />
    </Native.View>


    <Native.View style={{
        width : "90%" , 
        height : 180 ,
        alignSelf:"center",
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center" , 
        flexDirection:"column" ,
        paddingRight:10,
        borderWidth:1,
        borderColor:"#eee", 

        
        borderRadius:5,
        marginTop:10
    }}>

        <Native.Text style={{width  :"100%" , textAlign:"left",paddingLeft:20,color:"orange",
    paddingTop:50}}>
            My Temperature 
        </Native.Text>
        <Graph
            Color={"orange"}
        />
    </Native.View>
    <Native.View style={{

        height:100
    }}></Native.View>
      </ScrollView>
      <Footer
                ToChat={()=>{

                    navigation.navigate("Chat")
                }}

                ToDevice={
                    ()=>{
                    
                        navigation.navigate("Scanner")
                    }
                }

                ToRelations={()=>{
                    navigation.navigate("Relations")
                }}


                ToHome={
                    ()=>{
                        navigation.navigate("Dashboard")
                    }
                }

                
               />
      <SideMenu Hide={setOpen} Display={open} 
        OnLogOut={
          ()=>{
              navigation.navigate("Signin")
          }
      }
      ToMedical={()=>{
          navigation.navigate("ConsultMedical")
      }}

      ToRelation={()=>{
          navigation.navigate("Relations")
      }}

      ToLocation={()=>{
          navigation.navigate("Location")
      }}
      />

      
    </View>
  );
};

export default Dashboard;
