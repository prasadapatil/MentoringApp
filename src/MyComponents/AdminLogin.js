import React from 'react'

export const AdminLogin = () => {
    return (
		<div className="login-form">
				<h3>Admin Login</h3>
				<form>
					<i className="fa fa-user icon"></i>&nbsp;
					<label>User Name</label>
					<input type="text" name="aname"/>
					<i className="fa fa-lock"></i>&nbsp;
					<label>Password</label>
					<input type="password" name="apass"/>
					<input type="submit" value="Login"/> 
				</form>
				<h4><a href="#">Forget User Name/Password ?</a></h4>
				<div className="h3sub"><h4><a href="#">Back to Home</a></h4></div>
			</div>
    )
}
