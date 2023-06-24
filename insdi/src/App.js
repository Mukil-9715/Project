import './App.css';
import LoginPage from './Component/LoginPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        {/* <Route path='/' element={<LoginPage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
