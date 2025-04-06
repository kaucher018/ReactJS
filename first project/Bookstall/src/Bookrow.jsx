import React from 'react'
import Featured from './featured'
import Bookdetails from './Bookdetails'
import PropTypes from "prop-types";
import { Book } from 'lucide-react';


function Bookrow({book,onFeatured}) {

  return (
    <div className='flex justify-between items-center'>
    <div>
     <Bookdetails name={book.name} author={book.author}/>
      </div>
   <Featured onFeatured={onFeatured} book={book}/>

    </div>
  )
}
Bookrow.propTypes = {
  book: PropTypes.object.isRequired,
  onfeatured: PropTypes.func.isRequired,
};

export default Bookrow
