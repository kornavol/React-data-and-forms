import './Login.css'
import userLogo from '../assets/userLogo-2.png'

import {useState} from 'react';

export default function Login(props) {

       
    const [msg, setMsg] = useState('')
   

    /* Find a button over Event. The target is an id of button. We don't use a name or value because they can be changed f.e. translator  */
    let submitHandler = (e) => {
        e.preventDefault();
        let data = {};

        data.email = e.target[0].value;
        data.pass = e.target[1].value;

        //console.log(e.target);
        let url = "https://auth404.herokuapp.com/api/auth/login";
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(url, options).then(result => result.json().then(output => {
            let status = output.status;
            /* for send stats to App.js  */
            props.statusChecker(status);
            /* show a warning */
            if (status == 'failed') {
                /* This structure kinda reset a text for show aan animation */
                setMsg('')
                /* assign element instead just massage_, because wanna reveal text with animation  */
                setMsg(<h4 className="fadeIn color-yellow">{output.message}</h4>)
            }
        }));       
    }

    return (
        <div className="wrapper fadeInDown">
            {/* <h4 className="fadeIn fourth">{msg}</h4> */}
            {msg}
            <div id="formContent">

                {/* Tabs Titles */}
                <h2 className="active"> Sign In </h2>
                <h2 onClick={props.toggle} className="inactive underlineHover">Sign Up </h2>
                {/* Icon */}
                <div id='userLogo' className="fadeIn first">
                    <img className="userLogo" src={userLogo} id="icon" alt="User Icon" />
                </div>
                {/* Login Form */}
                <form onSubmit={submitHandler}>
                    {/*  type -= email screw up my outlook */}
                    {/* <input type="email" id="login" className="fadeIn second" name="login" placeholder="login" /> */}
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" />
                    <input id="LogIn" type="submit" className="fadeIn fourth" defaultValue="Log In" />
                </form>
                {/* Remind Password */}
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}