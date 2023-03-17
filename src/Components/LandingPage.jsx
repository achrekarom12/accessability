import React from 'react';
import {useNavigate} from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>This is Landing Page <br />
        <button onClick={() => navigate("/login")}>Login Here</button>
    </div>
  )
}

export default LandingPage