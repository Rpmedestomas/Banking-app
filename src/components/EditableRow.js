import React from "react";
 
const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter Name" 
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter Address" 
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="number" 
                    required="required" 
                    placeholder="Enter Initial Deposit " 
                    name="balance"
                    value={editFormData.balance}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="email" 
                    required="required" 
                    placeholder="Enter Email" 
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />  
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}
 
export default EditableRow