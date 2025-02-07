import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
// import Contact from './Pages/Contact';
import Models from './Pages/Models';
import Services from './Pages/Services';
import Profile from './Pages/Profile';
import Location from './Pages/Location';
import Favourites from './Pages/Favourites';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
      <Route path="/models" element={<Models/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    )
}



const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);


