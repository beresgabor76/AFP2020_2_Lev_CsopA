import React from 'react';
import NavbarHome from '../components/NavbarHome';
import NavbarAdmin from '../components/NavbarAdmin';
import RegisterForm from '../components/RegisterForm';
import { isAdmin, postRegisterAdmin } from '../actions';

const RegAdmin = () => {
  
  const registerAdmin = async (user) => {
    const userData = copyUserData(user);    
    const token = sessionStorage.getItem('lyricsToken');
    let response = await postRegisterAdmin(userData, token);           
    if (response?.data.status === 200)      
      alert('Sikeres regisztráció!');
    else if (response?.data.status === 401){
      window.alert('Sikertelen regisztráció hiányzó, lejárt vagy érvénytelen token miatt. ' +
                  'Kérem jelentkezzen be a letöltéshez!');
      window.location.href = '/home';
    } 
    else if (response?.data.status !== undefined)
      window.alert(response.data.message);       
    else
      window.alert('Elnézést kérünk. Hiba történt a kiszolgáló oldalon.');    
  }

  const copyUserData = (user) => {
    const userData = {
      name: user.name,
      email: user.email,
      password: user.password1,
      admin: true
    }
    let languages = user.languages.split(',');        
    userData['languages'] = languages.map(language => language.trim());
    return userData;
  }

  return (
    <>
      {isAdmin() ?
      <>
        <NavbarAdmin/>
        <RegisterForm onSubmit={registerAdmin}/>      
      </>:
      <>
        <NavbarHome/>
      </>}
    </>
   )
}

export default RegAdmin;