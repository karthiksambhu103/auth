import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
        </Routes>
      </Router >
    </div >
  );
}


export default App;
