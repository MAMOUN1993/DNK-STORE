import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Contact from './page/contact';
import Home from './page/home';
import Costmize from './components/reused/costmize';
import Cart from './components/reused/cart';
import About from './page/about';
import Footer from './components/reused/footer';
import Header from './components/reused/header';
import Store from './page/store';
import Info from './page/info';
import Allcart from './page/allcart';
import Secheader from './components/reused/secheader';
import MovedHeader from './components/reused/movheader';
import {useSelector } from 'react-redux';
function App() {
  const font = useSelector(state=>state.font)
  return (
    <div className="App" attr-font={font}>
      <BrowserRouter>
      <Secheader/>
      <MovedHeader/>
      <Header/>
      <Costmize/>
      <Cart/>
      <Routes>
        <Route path='cart' element={<Allcart/>}/>
        <Route index element={<Home/>}/>  
        <Route path='About' element={<About/>}/>
        <Route path='Home/:catagice' element={<Store/>}/>
        <Route path='Home/:catagice/:info' element={<Info/>}/>
        <Route path='Concat' element={<Contact/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
