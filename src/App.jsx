import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./pages/Profile"
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
        <Header />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />   
        <Route path="/Register" element={<Register/>} />
        

      </Routes>
    </Router>
  );
}

export default App;
