"use client"

import { useEffect, useState } from "react";
import PostCard from '@/components/posts/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts`);
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);


  return (
    <main className="grid min-h-screen lg:w-full lg:grid-cols-3 lg:text-left justify-between border-t-2 border-black">
      <div className="flex-col mx-10 text-lg lg:flex border-r-2 border-black">
        <div className="justify-self-start mb-20 justify-between">
          <div className="my-5">
            <h3>Topic</h3>
          </div>
          <div className="my-5">
            <h3>Topic</h3>
          </div>
          <div className="my-5">
            <h3>Topic</h3>
          </div>
          <div className="my-5">
            <h3>Topic</h3>
          </div>
          <div className="my-5">
            <h3>Topic</h3>
          </div>
          <div className="my-5">
            <h3>Topic</h3>
          </div>
        </div>

        <div className="mb-10">
          <div>
            <h3>LINK</h3>
          </div>
          <div>
            <h3>PROFILE</h3>
          </div>
        </div>
      </div>

      <div className="flex-col mt-5 mb-10 text-lg lg:flex ">

        <form action="">
          <label className="flex flex-row w-full justify-between">
            <input className="justify-self-start placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="What's new?" type="text" name="post" />
            <button className="justify-self-end ml-5 border-black border-2 p-5 rounded-full">Post</button>
          </label>
        </form>


        <h1 className="flex items-center my-5">Feed</h1>

        <div className="flex flex-col">
          {posts && posts.map((post) => (
            <PostCard
              id={post.id}
              title={post.title}
              details={post.details}
              userId={post.userId}
              datePosted={post.datePosted}
              dateOfIncident={post.dateOfIncident}
            />
          ))}
        </div>
      </div>

      <div className="flex-col mx-10 items-center justify-between text-lg lg:flex border-l-2 border-black">
        <div className="mt-5">
          <h1>Highlights</h1>

          <div></div>
        </div>
      </div>
    </main>
  );
}
