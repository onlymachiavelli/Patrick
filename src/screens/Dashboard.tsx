import * as React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import * as Native from 'react-native'
import { ProfileHeader, Footer, SideMenu } from '../components'
import { useGetMe } from '../hooks'
import Graph from '../components/Graph'
import MapView from 'react-native-maps'
const { height } = Dimensions.get("screen");

const Dashboard = ({ navigation }: any) => {
  const { GetMe, user } = useGetMe(navigation);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    GetMe()
  }, [])

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
      <ScrollView style={{ width: "100%" ,maxHeight:"70%" ,  backgroundColor:"red" }}>
        <View style={{
          width: "90%",
          height: "auto",
          borderWidth: 1,
          borderColor: "#eee",
          alignSelf: "center",
          padding: 10,
          borderRadius: 5,

        }}>
          <Text style={{ fontSize: 20, padding: 10 }}>
            Hey {user ? user.user.fullname : "Loading name"}, Your Health is Stable, nothing To worry About.
          </Text>
          
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

        
        borderRadius:5,
        marginTop:10
    }}>

        <Native.Text style={{width  :"100%" , textAlign:"left",paddingLeft:20,color:"red",
    paddingTop:50}}>
            My Blood Pressure 
        </Native.Text>
        <Graph
            Color={"red"}

            Labels={[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
              ]}
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
      <SideMenu Hide={setOpen} Display={open} />

      
    </View>
  );
};

export default Dashboard;
