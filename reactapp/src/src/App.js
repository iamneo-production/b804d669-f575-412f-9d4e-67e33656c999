import Home from './homepage';
// import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Orders from './order';
import About from './about';
import Signup from './signup';
import Login from './login';
import Products from './products';
function App() {
  return (
    <div className='app'>
      
<Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/orders' element={<Orders/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
</Routes>
</div>
  
  );
}

export default App;
