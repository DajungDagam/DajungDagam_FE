import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from "./pages/Main";
import BarterWriting from "./pages/Barter/Writing";
import BarterMain from "./pages/Barter/Main";
import BarterContent from './pages/Barter/Content';
import GroupWriting from "./pages/GroupPurchase/Writing";
import GroupMain from "./pages/GroupPurchase/Main";
import RecommendMain from "./pages/Recommend/Main";
import Login from "./pages/Login/Main";
import NickName from "./pages/Login/NickName";
import Addr from "./pages/Login/Addr";
import Start from "./pages/Login/Start";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/barterwriting" element={<BarterWriting/>} />
        <Route path="/bartermain" element={<BarterMain/>} />
        <Route path="/bartercontent" element={<BarterContent/>} />
        <Route path="/groupwriting" element={<GroupWriting/>} />
        <Route path="/groupmain" element={<GroupMain/>} />
        <Route path="/barterwriting" element={<BarterWriting/>} />
        <Route path="/recommendmain" element={<RecommendMain/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/loginnickname" element={<NickName/>} />
        <Route path="/loginaddr" element={<Addr/>} />
        <Route path="/loginstart" element={<Start/>} />

      </Routes>
    </Router>
  )
}

export default App;