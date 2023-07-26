import * as React from 'react'


const useRelations = () =>{




    //assuming saving one, keep in mind, the patient is the one who add the relations

    const [name, setName] : any = React.useState("")
    const [phone, setPhone] : any = React.useState("")
    //save data

    const SaveRelation = async () =>{

    }

    //accept pendings 
    const AcceptOrRefuse = async () =>{

    }

    //get all patient's 
    const GetPatients = async()=>{

    }
    //get all supervisors 
 
    const GetSupers = async () =>{
        
    }
    return {
        name , setName, phone, setPhone, SaveRelation
    }
}

export default useRelations