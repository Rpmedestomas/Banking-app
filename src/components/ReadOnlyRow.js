import React from "react";
 
const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
    return(
        <tr className="table-display-content-container">
          <td className="table-display-content">{contact.fullName}</td>
          <td className="table-display-content">{contact.userName}</td>
          <td className="table-display-content">{contact.balance}</td>
          <td className="table-display-button-container">
              <button type="button" onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
              <button type="button" onClick={(event) => handleDeleteClick(event, contact.id)}>Delete</button>
          </td>
        </tr>
    )
}
 
export default ReadOnlyRow
