import PropTypes from 'prop-types'
function Search({searchTerm,onSearchbook}) {
 
  return (
    <form >
    <input type="text" 
    value={searchTerm} 
    
    placeholder='search a book' 
    onChange={(event)=> onSearchbook(event.target.value)}
    className='mb-4 border rounded-md p-1 w-full'
    />
    
    </form>
  )
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchbook: PropTypes.func.isRequired,
};

export default Search
