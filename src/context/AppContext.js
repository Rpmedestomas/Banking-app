import React, { useState } from 'react'
import data from "../Data"
export const AppContext = React.createContext();

export default function AppProvider(props) {
  
    const [contact,setContact] = useState();

    const [contacts,setContacts] = useState(data);
    const [addFormData,setAddFormData] = useState({
      fullName: '',
      address: '',
      phoneNumber: '',
      email: ''
    })
   
    const [editFormData, setEditFormData] = useState({
      fullName: '',
      address: '',
      phoneNumber: '',
      email: ''
    })
   
    const [editContactId, setEditContactId] = useState(null);
    

    const state = {
        contact,
        contacts,
        addFormData,
        editFormData,
        editContactId
    }

    const func = {
        setContact,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId
    }

    // console.table(state, func, props);
    
    return (
        <AppContext.Provider value={{ ...state, ...func}}>
          {props.children}
        </AppContext.Provider>
    )
}
