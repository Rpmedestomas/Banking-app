import React from "react";
 
const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr className="edit-table-container">
            <td className="table-edit-content-container"> 
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter Name" 
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>
            
            <td className="table-edit-content-container">
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter Username" 
                    name="userName"
                    value={editFormData.userName}
                    onChange={handleEditFormChange}
                />
            </td>

            <td className="table-edit-content-container">
                <input 
                    type="number" 
                    required="required" 
                    placeholder="Enter Initial Deposit " 
                    name="balance"
                    value={editFormData.balance}
                    onChange={handleEditFormChange}
                />
            </td>
            
            <td className="table-edit-button-container">
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}
 
export default EditableRow