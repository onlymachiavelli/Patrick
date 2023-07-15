import AsyncStorage from "@react-native-async-storage/async-storage"



 
const GetOne = async (target : any) =>{
    return await AsyncStorage.getItem(target)
}

const SetOne = async (target : any , value : any) =>{
     AsyncStorage.setItem(target , value)
}

const DeleteOne = async (target : any) =>{
      AsyncStorage.removeItem(target)
}

const GetAll = async () =>{
    let arr = []
    let b = await AsyncStorage.getAllKeys()

    for (let i = 0; i < b.length; i++) {
        let a = await AsyncStorage.getItem(b[i])
        arr.push(a)
    }
    return arr
}

const FreeUp = async () => await AsyncStorage.clear()
export  {GetAll,GetOne,SetOne, DeleteOne, FreeUp}