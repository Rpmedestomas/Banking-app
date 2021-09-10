import React, { Fragment } from 'react'
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'
import Helper from '../functions/Helper'

function ledger() {

    const {
        contacts,
        editFormData,
        editContactId,
        HandleEditFormChange,
        HandleEditFormSubmit,
        HandleCancelClick,
        HandleDeleteClick,
        HandleEditClick}  = Helper()
    
    return (
        <div>
        <form onSubmit={HandleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Balance</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact)=> (
            <Fragment>
              {editContactId === contact.id ?(
              <EditableRow 
                editFormData = {editFormData} 
                handleEditFormChange={HandleEditFormChange}
                handleCancelClick={HandleCancelClick}
              />
              ):(
              <ReadOnlyRow 
                contact={contact} 
                handleEditClick={HandleEditClick}
                handleDeleteClick={HandleDeleteClick}
                />
              )}  
            </Fragment>
          ))}
          
        </tbody>
      </table>
      </form>
    </div>
    )
}

export default ledger
