import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, ToastAndroid} from 'react-native';

export default function App() {

  const onClicke = () =>{
    

    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />



      <TouchableOpacity onPress={()=>{
        onClicke()
      }}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
