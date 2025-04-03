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
    <ul className="p-4">
        {
            Books.map((book)=>(
                 <li key={book.id} className="flex items-center justify-between p-4 shadow rounded-lg m-4">
                    <Bookrow name={book.name} author={book.author} />
                  
                    </li>
            ))
           
            
        }
    </ul>
  )
}

export default Booklist







