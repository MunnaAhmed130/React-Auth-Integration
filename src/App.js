import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/shipping'>
                <Shipping></Shipping>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
            </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
