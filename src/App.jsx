import React from 'react';
import './App.css';
import Navbar from './components/sidebar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Products from './components/pages/Products';
import Team from './components/pages/Team';
import Messages from './components/pages/Messages';
import Support from './components/pages/Support';
//import Layout from './components/pages/Layout';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route element={<Layout/>} > */}
          <Route path='/' exact element={<Home/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/support' element={<Support/>}/>
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
