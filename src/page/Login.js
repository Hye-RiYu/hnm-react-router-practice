import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate, to}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    // console.log('login user function issue');
    setAuthenticate(true);
    navigate('/')
  };

  return (
    <Container className='login-area'>
      <Form className='login-form' onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login
