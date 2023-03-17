import React from "react";
import datas from "../assets/courses.json";
import { useLocation, useNavigate } from "react-router-dom";

function Course() {
    const location = useLocation();
  const navigate = useNavigate();


  return (
    <div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <iframe
              width="560"
              height="315"
              src={location.state.embed_link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 py-8">
              {location.state.name}
              </h1>
              <p class="mb-8 leading-relaxed">
              {location.state.desc}
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => navigate("/coursepage")}>
                  Marked as done!
                </button>
              </div>
            </div>
          </div>
        </section>
    
    </div>
  );
}

export default Course;
