import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PostCard = ({ id, title, details, userId, datePosted, dateOfIncident }) => {

  return (
    <Link href={`/posts/${id}`} className='hover:bg-[#F1ECD9] mx-2 md:mx-0 my-2 border-[#040979] text-[#040979]  border-2 rounded p-5 mb-5'>
      <div className="my-2">
        <h3 className='font-bold'>{title} - <span className="font-light">{dateOfIncident}</span></h3>
      </div>

      {(details.length > 280) ? 
        <p className='desc mb-3'>{details.substring(0, 280)}...</p> :
        <p className='desc mb-3'>{details}</p>
      }

      <h6>Posted on: {datePosted} by {userId}</h6>
    </Link>
  )
}

export default PostCard