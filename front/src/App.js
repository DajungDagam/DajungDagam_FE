import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from "./pages/Main";
import BarterWriting from "./pages/Barter/Writing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/barterwriting" element={<BarterWriting/>} />
      </Routes>
    </Router>
  )
}

export default App;