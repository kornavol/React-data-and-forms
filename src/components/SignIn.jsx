import './Login.css'

import userLogo from  '../assets/userLogo-2.png'

export default function Login(props) {



    /* Find a button over Event. The target is an id of button. We don't use a name or value because they can be changed f.e. translator  */
    let submitHandler = (e) => {
        e.preventDefault();
        let data =  {};
    
        data.emails = e.target[0].value;
        data.pass = e.target[1].value;
        
        console.log(e.target);
        let subBtn = e.nativeEvent.submitter.id;
        if (subBtn == 'LogIn') {
            console.log(data);
        } else 
        alert('Upsssss')
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* Tabs Titles */}
                <h2  className="active"> Sign In </h2>
                <h2 onClick={props.toggle} className="inactive underlineHover">Sign Up </h2>
                {/* Icon */}
                <div id='userLogo'  className="fadeIn first">
                    <img className="userLogo" src={userLogo} id="icon" alt="User Icon" />
                </div>
                {/* Login Form */}
                <form onSubmit ={submitHandler}>
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