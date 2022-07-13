
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users'
import Contact from './pages/Contact';
import Header from './components/Header';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='users' element={<Users/>} />
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
