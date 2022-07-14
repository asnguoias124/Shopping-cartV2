import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" color='#ffb205' />
          ) : (
            <AiOutlineStar fontSize="15px" color='gray' />
          )}
        </span>
      ))}
    </>
  )
};

export default Rating

