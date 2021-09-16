import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { nanoid } from 'nanoid'

export default function Helper() {
//Used to store all essential useStates 
    const{
        contact,
        contacts,
        addFormData,
        editFormData,
        editContactId,
        depositContactInfo,
        depositFormData,
        // balance1,
        // balance2,
        // balance3,
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
    } =  useContext(AppContext)

//Gets all the value from the input boxes on the accountCreate section
    function HandleAddFormChange(e) {
        e.preventDefault();

        //Associates the fieldName to userName, email, etc.
        const fieldName = e.target.getAttribute('name');
        //Associates the fieldValue to the input.
        const fieldValue = e.target.value;

        //Binds all input together in a single array
        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        //Changes the state of addFormData to the newly inputted values
        setAddFormData(newFormData);
    };

//Processes data from the HandleAddFormChange and pushes it to localStorage
    function HandleAddFormSubmit(e) {
        
        e.preventDefault();
        //Creates an object where data from addFormData are stored
        const newContact = {
            //Random ID generator
            id: nanoid(),
            //Stores the fieldValue from addFormData to its corresponding key:value pair
            fullName: addFormData.fullName,
            userName: addFormData.userName,
            email: addFormData.email,
            balance: addFormData.balance,
            password: addFormData.password
        };

        //Stores newContact and contacts to newContacts
        const newContacts = [...contacts, newContact]
        //Changes the state of contacts to newContact
        //Which becomes the part of '...contacts' as more newContacts are added
        setContacts(newContacts);
        //Stores a string that contains all the newContacts to a localStorage
        localStorage.setItem("newContacts",JSON.stringify(newContacts))
    };

//Powers the button to allow changing of contents initially submitted by the user
    function HandleEditClick(e, contact) {

         e.preventDefault();
         //Retains the ID to be the same and not to be editable
         setEditContactId(contact.id);
         //Creates an object that recalls the corresponding value of key:value pair of contact
         const formValues = {
            fullName: contact.fullName,
            userName: contact.userName,
            email: contact.email,
            balance: contact.balance,
            password: contact.password
         }
         //Changes the state of editFormData to formValues, which will be needed on its supplementary function
         setEditFormData(formValues);
    }
    
//Gets all the value from the input boxes on the ledger when user wants to edit information
    function HandleEditFormChange (e) {

        e.preventDefault();
        //Associates the fieldName to userName, email, etc.
        const fieldName = e.target.getAttribute('name');
        //Associates the fieldValue to the input.
        const fieldValue = e.target.value;

        //Binds all input together in a single array
        const newFormData = { ...editFormData};
        newFormData[fieldName] = fieldValue;

        //Changes the state of editFormData to the newly inputted values
        setEditFormData(newFormData);
    }

//Processes data from the HandleEditFormChange and SHOULD update it on the localStorage
    function HandleEditFormSubmit (e) {

        e.preventDefault();
        //Creates an object where data from editFormData are stored
        const editedContact = {
            //sets ID to be the same as the original ID
            id: editContactId,
            //Stores the fieldValue from editFormData to its corresponding key:value pair
            fullName: editFormData.fullName,
            userName: editFormData.userName,
            email: editFormData.email,
            balance: editFormData.balance,
            password: editFormData.password
        }

        //Stores all contacts to newContacts
        const newContacts = [...contacts];
        //Stores the corresponding contacts whose contact.id matches the retained id from editContactId
        const index = contacts.findIndex((contact) => contact.id === editContactId)
        //Replaces the newContacts with the corresponding index to the editedContact
        newContacts[index] = editedContact;

        //Changes the state of contacts to the newly inputted values
        setContacts(newContacts);
        //Clears the contents of editContactID to null 
        setEditContactId(null);
        //Updates corresponding newContacts on the localStorage
        localStorage.setItem("newContacts",JSON.stringify(newContacts))
    }

//Removes all data pertaining to the specific user data
    function HandleDeleteClick(e, contactId) {

        const newContacts = [...contacts]
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
        localStorage.setItem("newContacts",JSON.stringify(newContacts))
    };

//Revokes all changes made on the HandleEditFormChange
    function HandleCancelClick() {

        setEditContactId(null);
    };

////////////// BANK SERVICES

    function HandleDepositFormChange(e){

        e.preventDefault();
        

        //////////
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newDepositFormData = { ...depositFormData};
        newDepositFormData[fieldName] = fieldValue;

        //Changes the state of addFormData to the newly inputted values
        setDepositFormData(newDepositFormData);
    }

     function HandleDepositFormSubmit(e){
        e.preventDefault();
        
        const searchUserName = depositFormData.userName
        const index = contacts.findIndex((contact) => contact.userName === searchUserName)
        const match = contacts[index]

        if (match === undefined){
            console.log(searchUserName + ` does not exist`)
            } else{
                const newBal = parseFloat(depositFormData.balance) + parseFloat(match['balance'])
                const insertNewDepositFormData = {
                    balance: newBal,
                    userName: depositFormData.userName}
                 
                setDepositFormData(insertNewDepositFormData)
                // setNewContacts(depositFormData)
                // localStorage.setItem("newContacts", JSON.stringify(newContacts))
                alert('working')
                console.log(depositFormData)
                console.log(newBal)
        }
    }


    return{
        contact,
        contacts,
        addFormData,
        editFormData,
        editContactId,
        depositContactInfo,
        depositFormData,
        // balance1,
        // balance2,
        // balance3,
        setContact,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId,
        setDepositContactInfo,
        setDepositFormData,
        // setBalance1,
        // setBalance2,
        // setBalance3,
        HandleAddFormChange,
        HandleAddFormSubmit,
        HandleEditFormChange,
        HandleEditFormSubmit,
        HandleCancelClick,
        HandleDeleteClick,
        HandleEditClick,
        HandleDepositFormChange,
        HandleDepositFormSubmit
    }
}
