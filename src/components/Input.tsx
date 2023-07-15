import * as React from 'react'


import * as Native from 'react-native'
import { components } from '../styles'


const Input = ({...props}) =>{
    return (
        <Native.View style={components.InputContainer}>
            <Native.TextInput
                style={components.Input}
                placeholder={props.Text}
                secureTextEntry={props.Secure}
                //numeric 
                keyboardType={props.Number  ? "numeric" : "default"}
                //type
                textContentType={props.Type}
            />

        
        </Native.View>
    )
}

const SmallInp = ({...props}) =>{
    return (
      
        <Native.View style={components.SInputContainer}>
                <Native.TextInput
                    style={components.Input}
                    placeholder={props.Text}                    //numeric 
                    keyboardType={props.Number  ? "numeric" : "default"}
                    textContentType={props.Type}

                    secureTextEntry={props.Secure}
                    //limit 

                    maxLength={props.Length}

                    //type
                />

        
        </Native.View>
    )
}



export {SmallInp}
export default Input