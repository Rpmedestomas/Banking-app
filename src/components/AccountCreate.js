import Helper from '../functions/Helper'
 
function Accountcreate() {
    const {
        HandleAddFormChange,
        HandleAddFormSubmit}  = Helper()    
 
   return (
   <div className="create-account">
      <h2 className="create-account-text">Welcome to BPI mobile bank! Create an account with us and be part of our ever growing family! </h2>
      <form onSubmit= {HandleAddFormSubmit} className="create-account-form">
        <input 
            type="text" 
            name="fullName" 
            required="required" 
            placeholder="Enter Name"
            onChange={HandleAddFormChange}
          />
          <p id="errorFullName"> Full Name should only be letters and spaces. </p>
          <input 
            type="text" 
            name="userName" 
            required="required" 
            placeholder="Enter Username"
            onChange={HandleAddFormChange}
          />
          <p id="errorUserName">Username already in use.</p>
          <input 
            type="email" 
            name="email" 
            required="required" 
            placeholder="Enter Email"
            onChange={HandleAddFormChange}
          />
          <p id="errorEmail">Email address already in use. </p>
          <input  
            type="number" 
            name="balance" 
            required="required" 
            placeholder="Enter Initial Deposit"

            min= "0.000"
            step="0.001"
            precision={2}
            onChange={HandleAddFormChange}
          />
          <br/>

          <input 
            type="password" 
            name="password" 
            required="required" 
            placeholder="Enter Password"
            onChange={HandleAddFormChange}
          />

        <button type="submit">submit</button>
        <br/>
      </form>
      <h4 id='accountSuccess'>Account successfully created!</h4>
   </div>
   )
}
 
export default Accountcreate