import React, { useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Login = () => {
    const { googleSignIn, emailSignIn } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const [error, setError] = useState("");
    const history = useHistory();
    const redirect_uri = location.state?.from || '/therapy';


    // google sign in 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect_uri)
            })
    }


    // sign in with email 
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('user signed in')
        emailSignIn(email, password)
            .then(() => {
                history.push(redirect_uri);
                setError("")
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    console.log(email, password)



    return (
        <div className="mt-5">
            {/* logo in login page  */}
            <div>
                <img style={{ borderRadius: '50%', width: "120px" }} src={logo} alt="" />
                <h3>Wellness Physiotherapy</h3>
            </div>

            {/* login form  */}
            <div className="fw-bold mt-5  d-flex align-items-center justify-content-center text-start">
                <Form onSubmit={handleLogin} className="w-md-50 rounded border border-3 border-light p-3">
                    <h3 className='text-info'>Please Login</h3>
                    <div >

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
                        <Button className=" px-4 py-2 fw-bold" variant="info" >Login</Button>
                    </div>
                    {/* handler button  */}
                    <div className="mt-3">
                        <Button onClick={handleGoogleSignIn} className="login-button r" variant="outline-info" ><i className="fab fa-google me-2"></i>Sign in with google</Button>
                    </div>
                    {/*go to register page*/}
                    <Form.Group controlId="formBasicCheckbox">
                        <Link to="/registration">
                            Need an account?
                        </Link>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Login;