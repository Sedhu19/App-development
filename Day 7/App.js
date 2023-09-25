import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./compoent/pages/Home";
import About from "./compoent/pages/About";
import Skills from "./compoent/pages/Saved";
import Contact from "./compoent/pages/Contact";
import Services from "./compoent/pages/Services";
import LoginForm from "./compoent/pages/Loginform";
import Adminlogin from "./compoent/pages/Adminlogin";
import SignUpForm from "./compoent/pages/Signupform";
import Landing from './compoent/pages/Landing';
import Sidebar from './compoent/pages/Sidebar';
import Dashboard from './compoent/pages/Dashboard';
import { Users } from './compoent/pages/Users';
import { Templates } from './compoent/pages/Templates';
import { Feedback } from './compoent/pages/Feedback';
import { Provider } from 'react-redux/es';
import store from'./compoent/redux/Store'
import Signupform from './compoent/pages/Signupform';
import Contactuser from './compoent/pages/Contactuser';
import Aboutuser from './compoent/pages/Aboutuser';
import Privacy from './compoent/pages/Privacy';
import FAQ from './compoent/pages/FAQ';
import Footer from './compoent/pages/Footer';
import Terms from './compoent/pages/Terms';

function App() {
  
  return (
    <>
    <Provider store={store}>
      <Router>
    
        <Routes>
 {/* user area */}
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<Signupform/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
          <Route path='/aboutuser' element={<Aboutuser />} />
          <Route path='/contactuser' element={<Contactuser />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          
          {/* admin area */}
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/foot' element={<Footer/>} />
          <Route path='/terms' element={<Terms/>} />

          
          
        </Routes>
      </Router>
    
    </Provider>
    </>
  )
}

export default App


