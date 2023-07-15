import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tester from './src/screens/tester'

const Stack = createStackNavigator()
const App = () =>{
  //create stack 
  return (
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName="Tester"
      >
        
          <Stack.Screen 
            name="Tester"
            component={Tester}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default  App