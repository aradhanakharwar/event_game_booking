import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './common/Navbar';
import AddEvent from './pages/AddEvent';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <div>
       <Router>
        <Navbar/>
        {/* <div style={{height:100}}></div> */}
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
          <Route path='/addevent' element={<AddEvent/>} />
          {/* <Route path='/cart' element={<Cart/>}/> */}
        </Routes>
       </Router>
    </div>
  );
}

export default App;