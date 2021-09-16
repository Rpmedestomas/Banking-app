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
        withdrawFormData,
        depositFormData,
        transferOriginFormData,
        transferReceiveFormData,
        setContact,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId,
        setWithdrawFormData,
        setDepositFormData,
        setTransferOriginFormData,
        setTransferReceiveFormData
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

    ////////Withdraw
    function HandleWithdrawFormChange(e){

        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newWithdrawFormData = { ...withdrawFormData};
        newWithdrawFormData[fieldName] = fieldValue;

        //Changes the state of addFormData to the newly inputted values
        setWithdrawFormData(newWithdrawFormData);
    }

    function HandleWithdrawFormSubmit(e){
        e.preventDefault();        
        
        //Direct update of balance to localStorage
        const searchUserNameWithdraw = withdrawFormData.userName
        const searchPassword = withdrawFormData.password
        const userInfoWithdraw = [...contacts]
        const indexWithdraw = contacts.findIndex((contact) => contact.userName === searchUserNameWithdraw)
        const matchWithdraw = userInfoWithdraw[indexWithdraw]
     
        if ( matchWithdraw !== undefined){
            if( matchWithdraw.password === searchPassword){
                if( matchWithdraw.balance >= withdrawFormData.balance){
                    const updatedBalanceWithdraw = parseFloat(matchWithdraw.balance) - parseFloat(withdrawFormData.balance)
                    setContacts([...contacts], matchWithdraw.balance = updatedBalanceWithdraw)
                    localStorage.setItem("newContacts",JSON.stringify(contacts))
                    alert(`Success`)
                } else{
                    alert(`insufficient balance`)
                }
            } else {
                alert(`password is incorrect`)
            }
        } else{
            alert(searchUserNameWithdraw + ` does not exist`)
        }
        console.log(matchWithdraw)
    }

    ////////Deposit
    function HandleDepositFormChange(e){

        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newDepositFormData = { ...depositFormData};
        newDepositFormData[fieldName] = fieldValue;

        //Changes the state of addFormData to the newly inputted values
        setDepositFormData(newDepositFormData);
    }

     function HandleDepositFormSubmit(e){
        e.preventDefault();

        //Direct update of balance to localStorage
        const searchUserNameDeposit = depositFormData.userName
        const userInfoDeposit = [...contacts]
        const indexDeposit = contacts.findIndex((contact) => contact.userName === searchUserNameDeposit)
        const matchDeposit = userInfoDeposit[indexDeposit]
        
        if( matchDeposit !== undefined){
            const updatedBalanceDeposit = parseFloat(matchDeposit.balance) + parseFloat(depositFormData.balance)
            setContacts([...contacts], matchDeposit.balance = updatedBalanceDeposit)
            localStorage.setItem("newContacts",JSON.stringify(contacts))
            alert(`Success`)
        } else{
            alert(searchUserNameDeposit + ` does not exist`)
        }
    }

    ////////Transfer
    function HandleTransferOriginFormChange(e){

        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newTransferOriginFormData = { ...transferOriginFormData};
        newTransferOriginFormData[fieldName] = fieldValue;

        //Changes the state of addFormData to the newly inputted values
        setTransferOriginFormData(newTransferOriginFormData);
    }

    function HandleTransferReceiveFormChange(e){

        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newTransferReceiveFormData = { ...transferReceiveFormData};
        newTransferReceiveFormData[fieldName] = fieldValue;

        //Changes the state of addFormData to the newly inputted values
        setTransferReceiveFormData(newTransferReceiveFormData);
    }
    
    function HandleTransferFormSubmit(e){
        e.preventDefault();

        //Direct update of balance to localStorage
        const searchUserNameTransferOrigin = transferOriginFormData.userName
        const searchPassword = transferOriginFormData.password

        const searchUserNameTransferReceive = transferReceiveFormData.userName

        const userInfoTransfer = [...contacts]

        const indexTransferOrigin = contacts.findIndex((contact) => contact.userName === searchUserNameTransferOrigin)
        const matchTransferOrigin = userInfoTransfer[indexTransferOrigin]

        const indexTransferReceive = contacts.findIndex((contact) => contact.userName === searchUserNameTransferReceive)
        const matchTransferReceive = userInfoTransfer[indexTransferReceive]
        
        if(matchTransferOrigin !== undefined){
            if( matchTransferOrigin.password === searchPassword){
                if( matchTransferOrigin.balance >= transferOriginFormData.balance){
                    if(matchTransferReceive !== undefined){
                        const updatedBalanceTransferOrigin = parseFloat(matchTransferOrigin.balance) - parseFloat(transferOriginFormData.balance)
                        const updatedBalanceTransferReceive = parseFloat(matchTransferReceive.balance) + parseFloat(transferOriginFormData.balance)
                        setContacts([...contacts], matchTransferOrigin.balance = updatedBalanceTransferOrigin, matchTransferReceive.balance = updatedBalanceTransferReceive)
                        localStorage.setItem("newContacts",JSON.stringify(contacts))
                        alert(`Success`)
                    } else{ alert(searchUserNameTransferReceive + ` does not exist`)}
                } else{ alert(`insufficient balance`)}
            } else { alert(`password is incorrect`)}
        } else { alert(searchUserNameTransferOrigin + ` does not exist`)}
    }

    return{
        contact,
        contacts,
        addFormData,
        editFormData,
        editContactId,
        depositFormData,
        setContact,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId,
        setDepositFormData,
        HandleAddFormChange,
        HandleAddFormSubmit,
        HandleEditFormChange,
        HandleEditFormSubmit,
        HandleCancelClick,
        HandleDeleteClick,
        HandleEditClick,
        HandleWithdrawFormChange,
        HandleWithdrawFormSubmit,
        HandleDepositFormChange,
        HandleDepositFormSubmit,
        HandleTransferOriginFormChange,
        HandleTransferReceiveFormChange,
        HandleTransferFormSubmit
    }
}
