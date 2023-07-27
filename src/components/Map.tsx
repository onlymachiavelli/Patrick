import * as React from 'react'
import * as Native from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const { height } = Native.Dimensions.get('screen')

const latitude = 36.5072
const longitude = 8.7757
const CustomMarker = () => (
  <Native.Image
    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png' }}
    style={{ width: 40, height: 80 }} 
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
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} >
          <CustomMarker />
        </Marker>
      </MapView>
    </Native.View>
  )
}

export default Map
