import Header from "./Header"
import Search from "./Search"
import Booklist from "./Booklist"
import './index.css'
import { useState } from "react";
import PropTypes from "prop-types"; 





function Bookstall() {
    const Books=[
        {
            id:1,
            name: 'Choti Golpo',
            author: 'humayon ahmed',
            featured:false,
        },
        {
            id:2,
            name: 'ThreeSome 4',
            author: 'humayon ahmed',
            featured:false,
        },
        {
            id:3,
            name: 'Iron-man',
            author: 'Tony stark',
            featured:false,
        }
      ];
    const [books, setbooks] = useState(Books)
      const [searchTerm,setSearchTerm]= useState("")

      const tofeatured = (id) => {
        setbooks(
          books.map((book) => 
          book.id === id ?{...book, featured: !book.featured } : book
        )
      );
      };
      console.log(books);
      return (
    
        <div className="m-5">
          <Header/>
          
          <Search searchTerm={searchTerm} onSearchbook={setSearchTerm}/>
          <Booklist books={books} searchTerm={searchTerm} onFeatured={tofeatured}/>
        </div>
      
      );
}

export default Bookstall
