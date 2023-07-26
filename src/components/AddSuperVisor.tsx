
import * as Native from 'react-native'
import { relationsStyle } from '../styles'


import {Input} from './'



const AddSuper = ({...props}) =>{
    return (
        <Native.View style={relationsStyle.addsuper}>
            <Native.Text style={relationsStyle.title}>Add a SuperVisor</Native.Text>

            <Input
                Text={"Enter Name"}
            />

            <Input
                Text={"Enter Phone Number"}
                Number={true}
            />

            <Native.TouchableOpacity style={relationsStyle.addBtn}>
                <Native.Text style={{color:"white"}}>
                    Add To the DB
                </Native.Text>
            </Native.TouchableOpacity>
        </Native.View>
    )
}

export default AddSuper