import SignIn from '../components/SignIn.jsx';
import SignUp from '../components/SignUp.jsx';

import { useState } from 'react';

export default function Authorization(props) {

    let condition = 'SignUp';
    const [state, setstate] = useState(<SignIn toggle={toggle} />)

    function toggle() {
        if (condition == 'SignUp') {
            setstate(<SignUp toggle={toggle} />)
            condition = 'SignIn'
        } else if (condition == 'SignIn') {
            setstate(<SignIn toggle={toggle} />)
            condition = 'SignUp'

        }

    }


    return (
        state

    );


}