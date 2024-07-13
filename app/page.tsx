"use client"

import { useEffect, useState } from "react";
import PostCard from '@/components/posts/PostCard';
import PostModal from "@/components/posts/PostModal";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts`);
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, [postTitle]);

  const handlePostForm = (e) => {
    e.preventDefault();

    setOpen(true);
  }


  return (
    <main className="grid min-h-screen lg:w-full lg:grid-cols-3 lg:text-left justify-between border-t-2 border-[#040979]">
      <div className="hidden md:flex-col mx-10 text-lg lg:flex border-r-2 border-[#040979]">
        <div className="justify-self-start mb-20 justify-between">
          <div className="my-5">
            <button className="bg-[#040979] text-[#FEF9E7] py-2 px-5 rounded-full hover:bg-[#FEF9E7] hover:text-[#040979] hover:border-2 hover:border-[#040979]">
              CURRENT AFFAIRS
            </button>
          </div>
          <div className="my-5">
            <button className="bg-[#040979] text-[#FEF9E7] py-2 px-5 rounded-full hover:bg-[#FEF9E7] hover:text-[#040979] hover:border-2 hover:border-[#040979]">
              BUSINESS
            </button>
          </div>
          <div className="my-5">
            <button className="bg-[#040979] text-[#FEF9E7] py-2 px-5 rounded-full hover:bg-[#FEF9E7] hover:text-[#040979] hover:border-2 hover:border-[#040979]">
              HEALTH
            </button>
          </div>
          <div className="my-5">
            <button className="bg-[#040979] text-[#FEF9E7] py-2 px-5 rounded-full hover:bg-[#FEF9E7] hover:text-[#040979] hover:border-2 hover:border-[#040979]">
              ICT
            </button>
          </div>
          <div className="my-5">
            <button className="bg-[#040979] text-[#FEF9E7] py-2 px-5 rounded-full hover:bg-[#FEF9E7] hover:text-[#040979] hover:border-2 hover:border-[#040979]">
              SPORTS
            </button>
          </div>
          <div className="my-5">
            <button className="bg-[#040979] text-[#FEF9E7] py-2 px-5 rounded-full hover:bg-[#FEF9E7] hover:text-[#040979] hover:border-2 hover:border-[#040979]">
              ARTS
            </button>
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
        <form
          onSubmit={handlePostForm}
          className="mb-5 md:mb-0 md:px-0 px-2"
        >
          <label className="flex flex-row w-full justify-between">
            <input
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="justify-self-start placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FEF9E7] hover:bg-[#1a1d5c] hover:text-white focus:ring-[#1a1d5c] focus:ring-1 sm:text-sm"
              placeholder="What's new? Add your post title here..."
              type="text"
              name="post"
            />
            <button type="submit" className="justify-self-end ml-5 border-2 p-2 md:p-5 rounded-full bg-[#040979] text-[#FEF9E7] hover:bg-[#1a1d5c]">Post</button>
          </label>
        </form>

        <PostModal postTitle={postTitle} open={open} onClose={() => setOpen(false)}>
          <h3 className='font-bold my-5 md:mx-10'>{postTitle}</h3>
        </PostModal>

        <div className="flex flex-row mb-2">
          <h1 className="flex items-center mx-5 md:mx-0 my-2 md:my-5 font-medium text-[#040979] py-2 border-b-2 border-[#040979]">Feed</h1>

          <button className="md:hidden bg-[#040979] text-[#FEF9E7] py-1 px-5 rounded-full">Highlights</button>
        </div>

        <div className="flex flex-col">
          {posts && posts.map((post) => (
            <PostCard
              key={post.id}
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

      <div className="hidden md:flex-col md:mx-10 items-center justify-between text-lg lg:flex border-l-2 border-[#040979]">
        <div className="mt-5">
          <h1>Highlights</h1>

          <div></div>
        </div>
      </div>
    </main>
  );
}
