import SignIn from '../components/SignIn.jsx';
import SignUp from '../components/SignUp.jsx';

import { useState } from 'react';

export default function Authorization(props) {

    let condition = 'SignUp';
    const [state, setstate] = useState(
    <SignIn 
    toggle={toggle}
    statusChecker = {props.statusChecker} />)

    function toggle() {
        if (condition == 'SignUp') {
            setstate(<SignUp 
                toggle={toggle}
                statusChecker = {props.statusChecker}
                 />)
            condition = 'SignIn'
        } else if (condition == 'SignIn') {
            setstate(<SignIn 
                toggle={toggle}
                statusChecker = {props.statusChecker} />)
            condition = 'SignUp'

        }

    }


    return (
        state

    );


}