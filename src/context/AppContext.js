import React, { useState } from 'react'
import data from "../Data"
export const AppContext = React.createContext();

export default function AppProvider(props) {
  
    const [contact,setContact] = useState();

    const [contacts,setContacts] = useState(data);
    const [addFormData,setAddFormData] = useState({
      fullName: '',
      userName: '',
      email: '',
      balance: '',
      password: ''
      
    })
   
    const [editFormData, setEditFormData] = useState({
      fullName: '',
      userName: '',
      email: '',
      balance: '',
      password: ''
    })
   
    const [editContactId, setEditContactId] = useState(null);

    ////////Bank Services
    const [depositContactInfo, setDepositContactInfo] = useState({
      id: '',
      fullName: '',
      userName: '',
      email: '',
      password: ''
    })

    const [depositFormData, setDepositFormData] = useState({
      userName: '',
      balance: ''
    })

    // const [insertNewDepositFormData, setInsertNewDepositFormData] = useState({
    //   userName: '',
    //   balance: ''
    // })

    // const [balance1, setBalance1] = useState(0)
    // const [balance2, setBalance2] = useState(0)
    // const [balance3, setBalance3] = useState(0)



    

    const state = {
        contact,
        contacts,
        addFormData,
        editFormData,
        editContactId,
        depositContactInfo,
        depositFormData,
        // balance1,
        // balance2,
        // balance3
    }

    const func = {
        setContact,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId,
        setDepositContactInfo,
        setDepositFormData,
        // setBalance1,
        // setBalance2,
        // setBalance3
    }
    
    return (
        <AppContext.Provider value={{ ...state, ...func}}>
          {props.children}
        </AppContext.Provider>
    )
}
