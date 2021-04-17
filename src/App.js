import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Booking from './Components/Dashbord/Booking/Booking';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Rwview from './Components/Dashbord/Review/Rwview';
import AddService from './Components/AdminDashboard/AddService/AddService';
import ManageService from './Components/AdminDashboard/ManageService/ManageService';

export const UserContext=createContext()

function App() {
  const [loggedInUser, setLoggedInUser]=useState({})
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser] }>

      <Router>
        <div>
          <Switch>
          <PrivateRoute path="/booking/:_id">
             <Booking></Booking>
              
            </PrivateRoute>
            <PrivateRoute path="/review">
             <Rwview></Rwview>
              
            </PrivateRoute>
            <PrivateRoute path="/addservice">
            <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/manageService">
           <ManageService></ManageService>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            
            
            <Route path="/">
              <Home></Home>
            </Route>
           
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
