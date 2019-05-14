import React, {Component} from "react";
import "./UserLogin.css";

class UserLogin extends Component {
    constructor() {
        super();
        // this.state = {
        //     username: "",
        //     password: "",
        // }

    }




    render() {
        return(
            <div className="boxUserLogin">
                <header className="headerUserLogin">Login</header>
                   
                        <input 
                            type="email"                         
                            placeholder="Username (your email address)"
                            className="inputFieldsUserLogin"
                        />
                        <input 
                            type="text"                     
                            placeholder="Password"
                            className="inputFieldsUserLogin"
                        />
            
                    <button className="buttonUserLogin">Login</button>
                    <div className="loginHelpLinks">
                        <a href="#">Forgot password?</a>
                        <a href="#">Not a member yet?</a>
                    </div>
            </div>
        );
    }
}










export default UserLogin;