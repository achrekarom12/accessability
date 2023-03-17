import React from 'react'
import {useNavigate} from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
        This is Homepage<br />
        <button onClick={() => navigate("/blogs")}>Blogs</button><br />
        <button onClick={() => navigate("/grievance")}>Grievenace System</button><br />
        {/* <button onClick={() => navigate("/register")}>Sign up</button><br />
        <button onClick={() => navigate("/register")}>Sign up</button><br /> */}

    </div>
  )
}

export default Home