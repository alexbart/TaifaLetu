"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";

interface Props {
  id: number,
  title: string,
  details: string,
  userId: number,
  datePosted: string,
  dateOfIncident: string
}

const PostDetails = ({ params }) => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [postDetails, setPostDetails] = useState<Props>();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts/${id}`);
      const data = await response.json();

      console.log("post details")
      setPostDetails(data);
    };

    if (id) fetchPosts();
  }, [id]);

  return (
    <div className='border-black border-2 rounded p-5'>
      <h3>POST DETAILS</h3>
      <div className="my-2">
        <h3>{postDetails?.title}</h3>
      </div>

      <p>{postDetails?.details}</p>

      <h6>Posted on: {postDetails?.datePosted} by {postDetails?.userId}</h6>

    </div>
  )
}

export default PostDetails