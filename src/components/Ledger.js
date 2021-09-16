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
      <div className="ledger">
        <h2>Account Ledger</h2>
        <form onSubmit={HandleEditFormSubmit}>
        <table className="ledger-table-container">
          <thead className="table-header-content-container">
            <tr>
              <th className="table-header-content">Full Name</th>
              <th className="table-header-content">Username</th>
              <th className="table-header-content">Balance</th>
              <th className="table-header-content">Actions</th>
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
