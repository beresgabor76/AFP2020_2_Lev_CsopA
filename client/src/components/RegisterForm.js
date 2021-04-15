import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import { isAdmin } from '../actions';

const EMPTY = {
  name: '',
  email: '',
  password1: '',
  password2: '',
  languages: ''  
}

const RegisterForm = ({onSubmit}) => {
  
  const [user, setUser] = useState(EMPTY);

  useEffect(() => { setUser(user); }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});    
  }

  const handleSubmit = () => {        
    if (isAdmin() && !(user.name && user.email && user.password1 && user.languages)){
      window.alert("Hiányosan töltötte ki a regisztrációs űrlapot, kérem ellenőrizze!");
      return;
    }
    if (!isAdmin() && !(user.name && user.email && user.password1 && user.password2 && user.languages)){
      window.alert("Hiányosan töltötte ki a regisztrációs űrlapot, kérem ellenőrizze!");
      return;
    }
    if (user.password1.length < 5){
      window.alert("A jelszónak minimum 5 karakter hosszúnak kell lenni!");
      return;
    }
    if (!isAdmin() && (user.password1 !== user.password2)){
      window.alert("A jelszó és jelszó megerősítés mezők nem egyeznek meg!");
      return;
    }        
    onSubmit(user);
  }

  return(
    <>    
    <Form variant="primary" style={{width: 500, margin: 50}}>
      <Form.Group controlId="name" >
        <Form.Label>Felhasználó név</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Tetszőlegesen választott egyedi név" 
          name="name"
          value={user.name}
          onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>E-mail cím</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Csak egy regisztrációhoz érvényes" 
          name="email"
          value={user.email}
          onChange={handleChange}/>        
      </Form.Group>
      {isAdmin() ?
      <>
        <Form.Group controlId="password">
          <Form.Label>Jelszó</Form.Label>
          <Form.Control           
            type="text" 
            placeholder="Jelszó a bejelentkezéshez, min. 5 karakter" 
            name="password1"
            value={user.password1}
            onChange={handleChange}/>        
        </Form.Group>
      </>:
        <>
        <Form.Group controlId="password">
          <Form.Label>Jelszó</Form.Label>
          <Form.Control           
            type="password" 
            placeholder="Jelszó a bejelentkezéshez, min. 5 karakter" 
            name="password1"
            value={user.password1}
            onChange={handleChange}/>        
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Jelszó megerősítés</Form.Label>
          <Form.Control           
            type="password" 
            placeholder="" 
            name="password2"
            value={user.password2}
            onChange={handleChange}/>        
        </Form.Group>
      </>}
      <Form.Group controlId="languages">
        <Form.Label>Beszélt nyelvek</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Beszélt nyelvek felsorolása magyarul, vesszővel elválasztva" 
          name="languages"
          value={user.languages}
          onChange={handleChange}/>        
      </Form.Group>      
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Regisztráció
      </Button>
    </Form>
    </>     
  )
}

export default RegisterForm;