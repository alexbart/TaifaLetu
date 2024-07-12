import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PostCard = ({ id, title, details, userId, datePosted, dateOfIncident }) => {

  return (
    <Link href={`/posts/${id}`} className='hover:bg-[#F1ECD9] my-2 border-black border-2 rounded p-5 mb-5'>
      <div className="my-2">
        <h3 className='font-bold'>{title}</h3>
      </div>

      <p className='desc mb-3'>{details}</p>

      <h6>Posted on: {datePosted} by {userId}</h6>
    </Link>
  )
}

export default PostCard