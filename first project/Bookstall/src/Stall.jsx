import Header from "./Header"
import Search from "./Search"
import Booklist from "./Booklist"
import './index.css'
function stall() {
  return (
    <div className="m-5">
      <Header/>
      <Search/>
      <Booklist/>
    </div>
  )
}

export default stall
