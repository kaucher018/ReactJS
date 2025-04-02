import Bookrow from "./Bookrow";



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



function Booklist() {
  return (
    <ul>
        {
            Books.map((book)=>(
                 <li key={book.id}>
                    <Bookrow name={book.name} author={book.author} />
                  
                    </li>
            ))
           
            
        }
    </ul>
  )
}

export default Booklist







