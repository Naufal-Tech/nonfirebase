import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import User from './views/User';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import DetailGame from './pages/DetailGame';
import { AuthProvider } from './context/auth';
import ListGame from './pages/ListGame';
import Home from './pages/Home';


const isAuth = localStorage.getItem('token');

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/rps" component={Game} />
            <Route exact path="/profile/:username" component={Profile} />
            <Route
              exact
              path="/login"
              component={isAuth && isAuth !== undefined ? Game : Login}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/game/:id" component={DetailGame} />
            <Route exact path="/users" component={User} />
            <Route exact path="/listgames" component={ListGame} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </AuthProvider>

      </Router>
    );
  }
}

export default App;
