import React from 'react'

function Items() {
    const list = [{"id":1,"name":"Learn React like a Cake Walk"},
        {"id":2,"name":"Get Stronger in JavaScript"},
        {"id": crypto.randomUUID(),"name":"Be Master of Problem Solving"}]; //using a unique id

    const Itemlist=list.map((item)=><li key={item.id}>{item.name}</li>);
    console.log(list);
  return (
    
    <div>
    
      <ul>
        {Itemlist}
  </ul>
    </div>
  )
}

export default Items
