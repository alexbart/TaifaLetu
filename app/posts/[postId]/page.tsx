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
  const [postDetails, setPostDetails] = useState<Props>();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts/${params.id}`);
      const data = await response.json();

      setPostDetails(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <div className='border-black border-2 rounded p-5'>
      <div className="my-2">
        <h3>{postDetails?.title}</h3>
      </div>

      <p>{postDetails?.details}</p>

      <h6>Posted on: {postDetails?.datePosted} by {postDetails?.userId}</h6>

    </div>
  )
}

export default PostDetails