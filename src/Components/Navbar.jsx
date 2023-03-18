import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import TTS from "./TTS";

function Navbar() { 
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
    });
  });
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span
            class="ml-3 text-xl"
            onClick={() => {
              navigate("/home");
            }}
          >
            AccessAbility
          </span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {/* <a class="mr-5 hover:text-gray-900">First Link</a> */}
          <button className="mr-5" onClick={() => navigate("/jobportal")}>
            Job Portal
          </button>
          <br />
          <button className="mr-5" onClick={() => navigate("/blogpage")}>
            Resume Maker
          </button>
          <br />
          <button className="mr-5" onClick={() => navigate("/blogpage")}>
            Blogs
          </button>
          <br />
          <button className="mr-5" onClick={() => navigate("/coursepage")}>
            Courses
          </button>
          <br />
          <button className="mr-5" onClick={() => navigate("/grievance")}>
            Grievenace System
          </button>
          <br />

          {/* <a class="mr-5 hover:text-gray-900">Second Link</a> */}
          {/* <a class="mr-5 hover:text-gray-900">Third Link</a> */}
          {/* <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <TTS/>
        <button
          onClick={
            user
              ? () => signOut(auth).then(navigate("/"))
              : () => {
                  navigate("/");
                }
          }
          class="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0"
        >
          {user ? "Logout" : "Login"}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
