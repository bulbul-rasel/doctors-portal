import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appointment/Appoinment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<Appoinment></Appoinment>}></Route>
      </Routes>

    </div>
  );
}

export default App;
