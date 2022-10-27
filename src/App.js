import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
// import Marketplace from './components/Marketplace';
import Login from './components/Login';
import { UserContext } from './components/context/UserContext';

function App() {
  const [username, setUsername] = useState('Not Logged In');

  return (
  <UserContext.Provider value={{ username, setUsername }}>
    <div className="App">
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path = "/" element={ <Home />} />
              <Route path = "/login" element={ <Login />} />
            </Routes>
          <Footer/>
     </BrowserRouter>
    </div>
  </UserContext.Provider>
  );
}

export default App;
