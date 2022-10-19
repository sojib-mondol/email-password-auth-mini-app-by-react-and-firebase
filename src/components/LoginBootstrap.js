import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app);


const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');



    const handleSubmit = event => {
        event.preventDefault();

        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error => {
            console.error('error', error);
        })
        
    }
    
    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        if(!userEmail) {
            alert('Please enter email.');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then (() => {
            alert('Password reset email sent.')
        })
        .catch (error => {
            console.error(error);
        }) 
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" name='email' id="formGroupExampleInput" placeholder="Your Email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" className="form-control" name='password' id="formGroupExampleInput2" placeholder="Your Password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                
            </form>
            {success && <p>Successfully login to the account</p>}
            <p><small>New to this website? Please <Link to='/register'> Register</Link></small></p>
            <p>Forget Password? <button type="button" onClick={handleForgetPassword} className="p-0 border-0 btn btn-link "> Plese Reset</button></p>
        </div>
    );
};

export default LoginBootstrap;