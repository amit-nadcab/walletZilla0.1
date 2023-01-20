import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux'

import { Home } from './Pages/Home';
import { Auth } from './Pages/Auth';
import {Signup} from './Pages/Signup'
import { Dashboard } from './Pages/Dashboard';

function App() {
  const { userAddress } = useSelector((state) => state.data.value)
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
