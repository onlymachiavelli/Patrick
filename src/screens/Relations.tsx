import * as Native from 'react-native'
import * as React from 'react'

import { relationsStyle } from '../styles'
import { ProfileHeader , SideMenu, Footer, AddSuper, Supervisors, Patients, } from '../components'
import { useGetMe, useRelations } from '../hooks'

const Relations = ({navigation} : any) =>{

    const {GetMe, user} = useGetMe(navigation)
    const [open , setOpen] = React.useState(false) 
    React.useEffect(()=>{
        GetMe()
    }, [])

    return(
        <Native.View style={relationsStyle.container}>

            <ProfileHeader

            Display={setOpen}
            Status={open}
            ToProfile={()=>{
                navigation.navigate("Profile")
            }}
            Name={user ? user.user.fullname : "Loading"}
            Gender={user ? user.user.gender : "Loading"}


            />

            <Patients/>

            <Footer/>

            <SideMenu
            
               Hide={
                     setOpen
               }
               Display={open}
            />
        </Native.View>
    )
}

export default Relations