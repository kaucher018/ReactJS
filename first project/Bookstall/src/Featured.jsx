import React from 'react'
import { Star } from 'lucide-react'
import PropTypes from "prop-types"

function featured({book,onFeatured}) {
  

return (
  <button
       onClick={() => onFeatured(book.id)}
  >
      <Star color={book.featured ? "Green" : "Black"} />
  </button>
);
}


featured.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatured: PropTypes.func.isRequired,
};

export default featured



