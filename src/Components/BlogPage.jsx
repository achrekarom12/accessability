import React from 'react'
import data from "../assets/blogs.json";
import {useNavigate} from "react-router-dom";
import avatar from "../assets/user-dummy.jpeg"
import Navbar from './Navbar';


function BlogPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Audible Blogs
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Don't only read the blogs, now listen them too!
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((data) => (
          <article
            onClick={() => {
              navigate("/blogs", {state:data});
            }}
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500">
                {data.date}
              </time>
              {data.genre.map((genre) => (
              <p class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{genre}</p>
              ))}
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                  <span class="absolute inset-0"></span>
                  {data.title}
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                {data.desc}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src= {avatar}
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    {data.author}
                  </a>
                </p>
                <p class="text-gray-600">{data.position}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  </div>

  )
}

export default BlogPage