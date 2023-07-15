import React, { useState} from 'react';


function Forme() {

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


	return (
		<div className="App">
		<header className="App-header">
			<form id='foorm' method='POST' noValidate>
				{/*when user submit the form , handleSubmit()
					function will be called .*/}
				<h2> Geeks For Geeks </h2>
				<h3> Sign-up Form </h3>
				<img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt='' />
				<label >
				Name:
				</label><br/>
				<input type="text" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })}/><br/>
				{ /*when user write in name input box , handleChange()
					function will be called. */}
				<label >
				Age:
				</label><br/>
				<input type="text" value={user.age} onChange={e => setUser({ ...user, age: e.target.value })} /><br/>
					{ /*when user write in age input box , handleAgeChange()
					function will be called. */}
				<label>
				Email:
				</label><br/>
				<input type="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} /><br/>
				{/* when user write in email input box , handleEmailChange()
					function will be called.*/}
				<label>
				Password:
				</label><br/>
				<input type="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} /><br/>
					{/* when user write in password input box ,
						handlePasswordChange() function will be called.*/}
				<label>
				Confirm Password:
				</label><br/>
				<input type="password" value={user.cpassword} onChange={e => setUser({ ...user, cpassword: e.target.value })} /><br/>
						{/* when user write in confirm password input box ,
							handlecpasswordChange() function will be called.*/}
				<input type="submit" onClick={onSubmit} />
			</form>
	</header>
	</div>
);
}

export default Forme;

