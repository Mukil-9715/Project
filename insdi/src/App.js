import './App.css';
import LoginPage from './Component/Pages/LoginPage';
import {Routes, Route} from 'react-router-dom'
import Registerform from './Component/Pages/Registerform';
import Home from './Component/Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<LoginPage/>}/> */}
        <Route path='/Registerform' element={<Registerform/>}/>
        {/* <Route path='/Home' element={<Home/>}/> */}
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
