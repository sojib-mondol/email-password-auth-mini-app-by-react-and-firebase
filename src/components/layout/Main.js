import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Main = () => {

    const logOut = () => {
       

        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <button onClick={logOut}>Sign Out</button>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;