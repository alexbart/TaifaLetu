import React, { useEffect, useState } from 'react'

const PostCard = ({ id, title, details, userId, datePosted, dateOfIncident }) => {

  return (
    <div className='border-black border-2 rounded p-5 mb-5'>
      <div className="my-2">
        <h3>{title}</h3>
      </div>

      <p>{details}</p>

      <h6>Posted on: {datePosted} by {userId}</h6>

    </div>
  )
}

export default PostCard