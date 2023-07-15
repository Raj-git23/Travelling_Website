import React from "react";


export default function Fom() {
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
				<input type="text" value="name" /><br/>
				{ /*when user write in name input box , handleChange()
					function will be called. */}
				<label >
				Age:
				</label><br/>
				<input type="text" value="age"/><br/>
					{ /*when user write in age input box , handleAgeChange()
					function will be called. */}
				<label>
				Email:
				</label><br/>
				<input type="email" value="email"/><br/>
				{/* when user write in email input box , handleEmailChange()
					function will be called.*/}
				<label>
				Password:
				</label><br/>
				<input type="password" value="password" /><br/>
					{/* when user write in password input box ,
						handlePasswordChange() function will be called.*/}
				<label>
				Confirm Password:
				</label><br/>
				<input type="password" value="cpassword" /><br/>
						{/* when user write in confirm password input box ,
							handlecpasswordChange() function will be called.*/}
				<input type="submit" />
			</form>
	</header>
	</div>
);
}