import React, { useState, useEffect} from 'react'
 
const initialState ={
   username: '',
   email: '',
   password: '',
   initialAmt: '',
};
 
function Accountcreate() {
   const[newUser, setNewUser] = useState(initialState);
   const[userList, setUserList] = useState('');
 
  
   const handleOnChange = (e) =>{
       const {name, value} = e.target
       setNewUser({...newUser, [name]: value})
   };
 
   // use effect hook - side effect of changes, on mount, will load existing users
   useEffect(() => {
       const storedUsers = JSON.parse(localStorage.getItem("userList"));
       if (storedUsers) setUserList(storedUsers);
   }, []) // when array is blank, it is loaded only once on access of AccountCreate.js
 
   // on add new account, will add to local storage
   useEffect(() => {
       localStorage.setItem("userList", JSON.stringify(userList));
   }, [userList]) // when value in array changes, this effect will be triggered
 
 
   const handleOnSubmit = (e) =>{
       e.preventDefault();
       setUserList(user => [...user, newUser])
       localStorage.setItem("userList", JSON.stringify(userList));
       console.log(userList);
   };
 
   // const userList = localStorage.getItem("newUser");
 
   return (
   <div className="create-account">
       <h2 className="create-account-text">Welcome to <p> BPI </p> mobile bank! Create an account with us and be part of our ever growing family! </h2>
       <form onSubmit= {handleOnSubmit} className="create-account-form">
           <input
               type="text"
               value={newUser.username}
               onChange={handleOnChange}
               placeholder="Username"
               name="username"
           />
 
           <input
               type="email"
               value={newUser.email}
               onChange={handleOnChange}
               placeholder="Email"
               name="email"
           />
 
           <input
               type="text"
               value={newUser.password}
               onChange={handleOnChange}
               placeholder="Password"
               name="password"
           />
 
           <input
               type="number"
               value={newUser.initialAmt}
               onChange={handleOnChange}
               placeholder="Input initial deposit"
               name="initialAmt"
               defaultValue = {0}
           />
           <button type="submit">submit</button>
       </form>
   </div>
   )
}
 
export default Accountcreate