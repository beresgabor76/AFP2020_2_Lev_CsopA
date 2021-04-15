import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

const EMPTY = {
  name: '',  
  password: ''
}

const LoginForm = ({onSubmit}) => {
  
  const [user, setUser] = useState(EMPTY);

  useEffect(() => { setUser(user); }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});    
  }

  const handleSubmit = () => {                
    onSubmit(user);
  }

  return(
    <>    
    <Form variant="primary" style={{width: 500, margin: 50}}>
      <Form.Group controlId="name" >
        <Form.Label>Felhasználó név</Form.Label>
        <Form.Control           
          type="text"           
          name="name"
          value={user.name}
          onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Jelszó</Form.Label>
        <Form.Control           
          type="password" 
          name="password"
          value={user.password}
          onChange={handleChange}/>        
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Bejelentkezés
      </Button>
    </Form>
    </>     
  )
}

export default LoginForm;