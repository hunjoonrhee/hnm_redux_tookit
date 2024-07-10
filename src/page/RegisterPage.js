import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../style/register.style.css';
import { createANewUser } from '../component/context/user/userSlice';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    policy: false,
  });
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [policyError, setPolicyError] = useState(false);
  const { registerError, registerLoading } = useSelector((store) => store.user);

  const register = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword, policy } = formData;
    if (password !== confirmPassword) {
      setPasswordError('The password confirmation does not match.');
      return;
    }
    if (!policy) {
      setPolicyError(true);
      return;
    }
    setPasswordError('');
    setPolicyError(false);
    dispatch(createANewUser(formData));
  };

  const handleChange = (event) => {
    const { id, value, checked } = event.target;
    if (id === 'policy') {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  return (
    <Container className="register-area">
      {registerLoading && (
        <div>
          <Alert variant="danger" className="loading-message">
            loading...
          </Alert>
        </div>
      )}
      {registerError && (
        <div>
          <Alert variant="danger" className="error-message">
            {registerError}
          </Alert>
        </div>
      )}
      <Form onSubmit={register}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" id="email" placeholder="Enter email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" id="name" placeholder="Enter name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id="password" placeholder="Password" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required isInvalid={passwordError} />
          <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions."
            id="policy"
            onChange={handleChange}
            isInvalid={policyError}
            checked={formData.policy}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          SignUp
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
