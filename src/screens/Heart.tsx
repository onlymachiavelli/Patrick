import * as React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native' // Import ScrollView from 'react-native'
import * as Native from 'react-native'
import { ProfileHeader, Footer, SideMenu } from '../components'
import { useGetMe } from '../hooks'
import Graph from '../components/Graph'

const { height } = Dimensions.get("screen")

const Heart = ({ navigation }: any) => {
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


        <Graph
            Color={"red"}
        />
   
      <SideMenu Hide={setOpen} Display={open} />
    </View>
  )
}

export default Heart