import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navabar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./component/PrivateRoute";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-[100vw] min-h-[100vh] h-full bg-richblack-900 flex flex-col">
      <Navabar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
