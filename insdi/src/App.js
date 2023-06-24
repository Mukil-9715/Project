import './App.css';
import LoginPage from './Component/Pages/LoginPage';
import {Routes, Route} from 'react-router-dom'
import Registerform from './Component/Pages/Registerform';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Registerform' element={<Registerform/>}/>
        {/* <Route path='/' element={<Registerform/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
