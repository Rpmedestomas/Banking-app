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
    const [withdrawFormData, setWithdrawFormData] = useState({
      userName: '',
      balance: '',
      password: ''
    })

    const [depositFormData, setDepositFormData] = useState({
      userName: '',
      balance: ''
    })

    const [transferOriginFormData, setTransferOriginFormData] = useState({
      userName: '',
      balance: '',
      password: ''
    })

    const [transferReceiveFormData, setTransferReceiveFormData] = useState({
      userName: '',
      balance: '',
      password: ''
    })



    const state = {
        contact,
        contacts,
        addFormData,
        editFormData,
        editContactId,
        withdrawFormData,
        depositFormData,
        transferOriginFormData,
        transferReceiveFormData
    }

    const func = {
        setContact,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId,
        setWithdrawFormData,
        setDepositFormData,
        setTransferOriginFormData,
        setTransferReceiveFormData
    }
    
    return (
        <AppContext.Provider value={{ ...state, ...func}}>
          {props.children}
        </AppContext.Provider>
    )
}
