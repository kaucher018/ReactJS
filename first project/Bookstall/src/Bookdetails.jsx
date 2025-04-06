import React from 'react'
import PropTypes from "prop-types"


function Bookdetails({name,author}) {
  return (
    <div>
      <h2 className='text-lg font-bold'>{name}</h2>
      <p className='text-gray-600'> Artist: {author}</p>
    </div>
  )
}
Bookdetails.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookdetails
