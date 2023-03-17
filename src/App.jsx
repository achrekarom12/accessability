import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Schemes from './Components/Schemes';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import BlogPages from './Components/BlogPage';
import GrievanceSys from './Components/GrievanceSys';
import CoursePage from './Components/CoursePage';
import LandingPage from './Components/LandingPage';


function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Register/>} /> 
          <Route path="/schemes" element={<Schemes/>} /> 
          <Route path="/blogs" element={<Blogs/>} /> 
          <Route path="/blogpage" element={<BlogPages/>} /> 
          <Route path="/grievance" element={<GrievanceSys/>} /> 
          <Route path="/coursepage" element={<CoursePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
