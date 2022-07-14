
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users'
import Contact from './pages/Contact';

import UserDetail from './pages/UserDetail'
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';
function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<DashboardLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='users' element={<Users/>} />
        <Route path='users/:id' element={<UserDetail/>} />
        <Route path='contact' element={<Contact/>}/>
        </Route>
        <Route path="auth" element={<AuthLayout/>}>
        <Route index path='login' element={<Login/>}/>
        </Route>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
