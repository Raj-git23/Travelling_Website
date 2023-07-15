import React, { useState} from 'react';
import { 
  MdOutlineAccountCircle,
  MdAccessible
   } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbPassword } from "react-icons/tb";

export default function Login() {
    const [user,setUser] = useState({
        name:"", age:[], email:"",password:"", cpassword:""
    });

    const onSubmit =async( e ) => {
        e.preventDefault();	 

        const {name, age, email,password, cpassword} = user;
        console.log(e)
        
        const res = await fetch('/login', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            name, age, email,password, cpassword	
           }),
        })
          const data = await res.json();
          console.log(data)

          if (data.status === 400 || !data) {
            window.alert("Invalid");
            console.log("Invalid REgistration");
          }else{
            window.alert("Success");
            console.log("Successfully Registered");
          }
      }

    return(
      <>
      <div className='forme'>
        <div className='form-header'>
          <form id='formm' method='POST' noValidate>
            <h2> LOGIN-FORM </h2>
            <br/>
          
            <label htmlFor='name'>
              <input type="text" placeholder='name' value={user.name} onChange={e => setUser({ ...user, name: e.target.value })}/>
             <i className='icons'> <MdOutlineAccountCircle/></i>
            </label>
           <br/> 

           <label htmlFor='age'>
               <input type="text" placeholder='age' value={user.age} onChange={e => setUser({ ...user, age: e.target.value })}/>
               <i className='icons'><MdAccessible/></i>
            </label>
           <br/> 

           <label htmlFor='email'>
               <input type="text" placeholder='email' value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}/>
              <i className='icons'> <AiOutlineMail/></i>
            </label>
           <br/> 

           <label htmlFor='password'>
               <input type="text" placeholder='password' value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}/>
               <i className='icons'><TbPassword/></i>
            </label>
           <br/> 

           <label htmlFor='confirm password'>
               <input type="text" placeholder='confirm password' value={user.cpassword} onChange={e => setUser({ ...user, cpassword: e.target.value })}/>
               <i className='icons'><RiLockPasswordLine/></i>
            </label>
           <br/> 

            {/* <label >
            Age:
            </label><br/>
            <input type="text" value={user.age} onChange={e => setUser({ ...user, age: e.target.value })} /><br/>
              { /*when user write in age input box , handleAgeChange()
              function will be called. 
            <label>
            Email:
            </label><br/>
            <input type="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} /><br/>
             when user write in email input box , handleEmailChange()
              function will be called.
            <label
            Password:
            </label><br/>
            <input type="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} /><br/>
              {/* when user write in password input box ,
                handlePasswordChange() function will be called.
            <label
            Confirm Password:
            </label><br/>
            <input type="password" value={user.cpassword} onChange={e => setUser({ ...user, cpassword: e.target.value })} /><br/>
                {/* when user write in confirm password input box ,
                  handlecpasswordChange() function will be called.*/} 
            <input type="submit" onClick={onSubmit} value="Register" />
          </form>
        </div>
      </div></>
    )
}