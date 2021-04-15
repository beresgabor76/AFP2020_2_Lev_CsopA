import React from 'react';
import NavbarHome from '../components/NavbarHome';
import LoginForm from '../components/LoginForm';
import { postLoginUser } from '../actions';

const Login = () => {
  
  const loginUser = async (user) => {
        
    let response = await postLoginUser(user);        
    if (response?.data.status === 200){    
      sessionStorage.setItem('lyricsToken', response.data.message);
      alert('Sikeres bejelentkezés! Kellemes időtöltést!');
      window.location.href = '/homeuser';
    }
    else if (response?.data.status === 400)
      window.alert('Nem megfelelő név vagy jelszó!');
    else
      window.alert('Elnézést kérünk. Hiba történt a kiszolgáló oldalon.');    
  }

  return (
    <>
      <NavbarHome/>
      <LoginForm onSubmit={loginUser}/>      
    </>
   )
}

export default Login;