import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebaseConfig";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((data) => {
          if (data.data()["registerCompleted"]) {
            setInitializing(false);
          } else {
            navigate("/register");
          }
        });
      } else {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div>
        This is Homepage
        <br />
        <button onClick={() => navigate("/blogs")}>Blogs</button>
        <br />
        <button onClick={() => navigate("/grievance")}>
          Grievenace System
        </button>
        <br />
        {/* <button onClick={() => navigate("/register")}>Sign up</button><br />
        <button onClick={() => navigate("/register")}>Sign up</button><br /> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
