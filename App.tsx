import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import * as Screens from './src/screens'
const Stack = createStackNavigator()
import {Footer} from './src/components'
const App = () =>{
  //create stack 

  return (
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName="Tester"
      >
        
          <Stack.Screen 
            name="Tester"
            component={Screens.Tester}
          />

        <Stack.Screen 
            name="Signin"
            component={Screens.SignIn}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

<Stack.Screen 
            name="Signup"
            component={Screens.Signup}

            //remove the header 
            options={{
              headerShown: false
            }}
          />


<Stack.Screen 
            name="Happy"
            component={Screens.Happy}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

      <Stack.Screen 
            name="Profile"
            component={Screens.Profile}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

      <Stack.Screen 
            name="HeartStatus"
            component={Screens.HeartStatus}

            //remove the header 
            options={{
              headerShown: false
            }}
          />
      </Stack.Navigator>

      <Footer/>
    </NavigationContainer>
  )
}

export default  App