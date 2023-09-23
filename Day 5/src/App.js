import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';
import NavBar from './components/nav/Navbar';
import { About } from './components/Pages/About';
import { MyResumes } from './components/Pages/MyResumes';
import { ResumeTemplates } from './components/Pages/ResumeTemplates';
import { Contact } from './components/Pages/Contact';
import { Provider } from 'react-redux';
import store from './components/Redux/Store';


function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navbar" element={<NavBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-resumes" element={<MyResumes />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
