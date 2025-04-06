import Bookrow from "./Bookrow"
import PropTypes from 'prop-types'

function Booklist({books,searchTerm,onFeatured}) {

  const rows = [];
  books.forEach((book) => {
     if(book.name.toLowerCase().includes(searchTerm.toLowerCase()))
        {
        rows.push(<Bookrow key={book.id} book={book} onFeatured={onFeatured} />);
      }
  });

  return <div className="space-y-4">{rows}</div>;
}
Booklist.propTypes = {
  books: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onfeatured: PropTypes.func.isRequired,
};

export default Booklist










