<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
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
import Course from './Components/Course';
import JobPortal from './Components/JobPortal';
>>>>>>> fd7dc2e (added blogs)

import Schemes from "./Components/Schemes";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Register from "./Components/Register";
import BlogPages from "./Components/BlogPage";
import GrievanceSys from "./Components/GrievanceSys";
import CoursePage from "./Components/CoursePage";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogpage" element={<BlogPages />} />
          <Route path="/grievance" element={<GrievanceSys />} />
          <Route path="/coursepage" element={<CoursePage />} />
=======
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/schemes" element={<Schemes/>} /> 
          <Route path="/blogs" element={<Blogs/>} /> 
          <Route path="/blogpage" element={<BlogPages/>} /> 
          <Route path="/grievance" element={<GrievanceSys/>} /> 
          <Route path="/coursepage" element={<CoursePage/>} /> 
          <Route path="/course" element={<Course/>} /> 
          <Route path="/jobportal" element={<JobPortal/>} /> 

>>>>>>> fd7dc2e (added blogs)
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
