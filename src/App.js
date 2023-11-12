import Feedback from "./components/Feedback";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Feedback/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="*" element={<Feedback/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
