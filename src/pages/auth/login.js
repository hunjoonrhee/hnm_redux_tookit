import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../context/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, logInError, logInLoading } = useSelector((store) => store.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithEmail = (event) => {
    event.preventDefault();
    dispatch(logInUser({ email, password }));
  };

  console.log(user);
  // const handleGoogleLogin = async (googleData) => {
  //   dispatch(userActions.loginWithGoogle(googleData.credential));
  // };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  return (
    <>
      <Container className="login-area">
        {logInError && (
          <div className="error-message">
            <Alert variant="danger">{logInError}</Alert>
          </div>
        )}
        <Form className="login-form" onSubmit={loginWithEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
          </Form.Group>
          <div className="display-space-between login-button-area">
            <Button variant="dark" type="submit">
              Login
            </Button>
            <div>
              Do you not have an account yet?
              <Link href="/register">Sign Up</Link>
            </div>
          </div>

          {/* <div className="text-align-center mt-2">
            <p>-Log in with an external account.-</p>
            <div className="display-center">
              <GoogleLogin onSuccess={handleGoogleLogin} onError={() => {}} />
            </div>
          </div> */}
        </Form>
      </Container>
    </>
  );
};

export default Login;
