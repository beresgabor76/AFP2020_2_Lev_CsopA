import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';
import HomeUser from './pages/HomeUser';
import Search from './pages/Search';
import Lyrics from './pages/Lyrics';
import Register from './pages/Register';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Revise from './pages/Revise';
import ReviseForm from './pages/ReviseForm';
import Inspect from './pages/Inspect';
import RegAdmin from './pages/RegAdmin';

const App = () => {
  return (    
    <div className=".container">
      <Header/>
      <Router>        
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/homeuser">
            <HomeUser />
          </Route>
          <Route path="/lyrics/:id">
            <Lyrics />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route exact path="/revise/:id">
            <ReviseForm />
          </Route>
          <Route exact path="/revise">
            <Revise />
          </Route>          
          <Route path="/inspect">
            <Inspect />
          </Route>
          <Route path="/regadmin">
            <RegAdmin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
   )
}

export default App;