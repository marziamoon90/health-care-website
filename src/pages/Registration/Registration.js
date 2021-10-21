import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import logo from '../../images/logo.png'
import useAuth from '../../Hooks/useAuth';



const Registration = () => {
    const { user, signUpWithEmail, signInUsingGoogle } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/therapy';

    const handleSignup = (e) => {
        e.preventDefault();
        signUpWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                history.push('./therapy')
                setError("")
            }).catch((error) => {
                setError(error.message)
            });
        console.log('user register')
    }

    // google sign in 
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="mt-5">
            {/* logo in register page  */}
            <div>
                <img style={{ borderRadius: '50%', width: "120px" }} src={logo} alt="" />
                <h3>Wellness Physiotherapy</h3>
            </div>

            {/* login form  */}
            <div className="fw-bold mt-5  d-flex align-items-center justify-content-center text-start">
                <Form onSubmit={handleSignup} className="w-md-50 rounded border border-3 border-light p-3">
                    <h3 className='text-info'>Please Register</h3>
                    <div >
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Adress</Form.Label>
                            <Form.Control placeholder="Enter your name" />
                        </Form.Group>

                        {/*email input field  */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        {/* password input field  */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className=" px-4 py-2 fw-bold" variant="info" >Register</Button>
                    </div>
                    {/* handler button  */}
                    <div className="mt-3">
                        <Button onClick={handleGoogleSignIn} className="login-button r" variant="outline-info" ><i className="fab fa-google me-2"></i>Sign up with google</Button>
                    </div>
                    {/*go to register page*/}
                    <Form.Group controlId="formBasicCheckbox">
                        <Link to="/login">
                            Already have an account?
                        </Link>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Registration;