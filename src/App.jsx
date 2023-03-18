import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Course from './Components/Course';
import JobPortal from './Components/JobPortal';

import Schemes from "./Components/Schemes";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Register from "./Components/Register";
import BlogPages from "./Components/BlogPage";
import GrievanceSys from "./Components/GrievanceSys";
import CoursePage from "./Components/CoursePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ResumeMakers from "./Components/ResumeMakers";
import TTS from "./Components/TTS";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/schemes" element={<Schemes/>} /> 
          <Route path="/blogs" element={<Blogs/>} /> 
          <Route path="/blogpage" element={<BlogPages/>} /> 
          <Route path="/grievance" element={<GrievanceSys/>} /> 
          <Route path="/coursepage" element={<CoursePage/>} /> 
          <Route path="/course" element={<Course/>} /> 
          <Route path="/jobportal" element={<JobPortal/>} /> 
          <Route path="/resume" element={<ResumeMakers/>} /> 
          <Route path="/tts" element={<TTS/>} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
