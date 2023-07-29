import * as React from 'react'
import * as Native from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const { height } = Native.Dimensions.get('screen')

const latitude = 35.7072
const longitude = 9.7757
const CustomMarker = () => (
  //<FontAwesome name="map" size={25} color="white" />
  
  <Native.Image
    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/157/991/original/pin-location-icon-sign-symbol-design-free-png.png' }}
    style={{ width: 25, height: 38,resizeMode: 'stretch', }} 
  />
)

const Map = ({ ...props }) => {
  return (
    <Native.View style={{ width: '100%', height }}>
      <MapView
        initialRegion={{
          latitude: 33.8869,
          longitude: 9.5375,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}


      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }}
            title='Hey' 
            description='Shut up Meg'
        >
          <CustomMarker />
        </Marker>
      </MapView>
    </Native.View>
  )
}

export default Map
