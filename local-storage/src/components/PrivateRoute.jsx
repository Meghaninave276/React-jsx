import React, { useEffect, useState } from 'react'
import Signin from './Signin';

export default function PrivateRoute({ children }) {
    const [user, setUser] = useState({});
    const getUser = () => {
        const res = JSON.parse(localStorage.getItem("user"));
        setUser(res);
    }

    useEffect(() => {
        getUser();
    }, [])

    if (!user) {
        return <Signin />;
    }

    return children;
}


// is user is autheticated(logged-in) --> Home Page
// is not authenticated --> sign in

// private-route
//   component-wrap
// /private-route