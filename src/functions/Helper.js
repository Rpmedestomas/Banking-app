import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { nanoid } from 'nanoid'

export default function Helper() {
    const{
        contacts,
        addFormData,
        editFormData,
        editContactId,
        setContacts,
        setAddFormData,
        setEditFormData,
        setEditContactId
    } =  useContext(AppContext)

    function HandleAddFormChange(e) {
        
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    function HandleAddFormSubmit(e) {
        
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            balance: addFormData.balance,
            email: addFormData.email,
        };

        const newContacts = [...contacts, newContact]
        setContacts(newContacts);
        localStorage.setItem("newContacts",JSON.stringify(newContacts))
    };

    function HandleEditClick(e, contact) {
         e.preventDefault();
         setEditContactId(contact.id);
         const formValues = {
             fullName: contact.fullName,
             address: contact.address,
             balance: contact.balance,
             email: contact.email
         }
         setEditFormData(formValues);
        console.log(contact)
    }

    function HandleEditFormSubmit (e) {
        e.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            balance: editFormData.balance,
            email: editFormData.email
        }

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId)

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    }

    function HandleEditFormChange (e) {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function HandleDeleteClick(e, contactId) {

        const newContacts = [...contacts]

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    function HandleCancelClick() {

        setEditContactId(null);
    };

    return{
            contacts,
            addFormData,
            editFormData,
            editContactId,
            setContacts,
            setAddFormData,
            setEditFormData,
            setEditContactId,
            HandleAddFormChange,
            HandleAddFormSubmit,
            HandleEditFormChange,
            HandleEditFormSubmit,
            HandleCancelClick,
            HandleDeleteClick,
            HandleEditClick
    }
}
