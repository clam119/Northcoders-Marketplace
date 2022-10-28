import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleItem from './components/SingleItem';
import Basket from './components/Basket';
import { UserContext } from './components/context/UserContext';
import { BasketContext } from './components/context/BasketContext';
function App() {
  const [username, setUsername] = useState('Not Logged In');
  const [basket, setBasket] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  return (
  <UserContext.Provider value={{ username, setUsername }}>
  <BasketContext.Provider value={{ basket, setBasket, finalPrice, setFinalPrice }}>
    <div className="App">
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path = "/" element={ <Home />} />
              <Route path = "/login" element={ <Login />} />
              <Route path = "/marketplace" element={ <Marketplace />} />
              <Route path = "/items/:item_id" element={ <SingleItem />} />
              <Route path = "/basket" element = {<Basket finalPrice={finalPrice} />} />
              <Route path = "/user/signup" element ={<Signup />} />
            </Routes>
          <Footer/>
     </BrowserRouter>
    </div>
  </BasketContext.Provider>
  </UserContext.Provider>
  );
}

export default App;
