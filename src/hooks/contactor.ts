import * as React from 'react'

import axios from 'axios'
import {AsyncStorage} from './../hooks'


const useChatter = () => {
    // the point is to send a message and receive ones
    const [message, setMessage] = React.useState("")
    const [conversation, setConv]: any = React.useState([])
  
    const SendAndReceive = async () => {
      const ip: any = await AsyncStorage.GetOne("ip")
      if (!ip) alert("Error getting ip ")
      console.log(message)
  
      try {
        const res = await axios.post(`http://${ip}:5000/get_response`, {
          user_input: message,
        });
  
        // Update the conversation with both user and bot messages
        setConv((prevConversation: any) => [
          ...prevConversation,
          {
            part: "user",
            message: message,
          },
          {
            part: "bot",
            message: res.data.response, // Assuming the response is in res.data.response
          },
        ]);
  
        setMessage("");
        console.log("Done");
      } catch (e) {
        console.log(e)
      }
    };
  
    return {
      message,
      setMessage,
      SendAndReceive,
      conversation,
      setConv,
    }
  }
  
  export default useChatter
  