import React from 'react'

export default function List({todoData, setTodoData}) {

  const handleClick = (id) => {
    let newTodoData = todoData.todoData.filter((data)=>data.id !== id);
    console.log('newTodoData', newTodoData);
    // this.setState({todoData: newTodoData});
    setTodoData(newTodoData);
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data)=>{
      if(data.id===id){
        data.completed = !data.completed;
      }
      return data;
    });
    // setState({todoData:newTodoData});
    setTodoData(newTodoData);
  };



  return (
    <div>
      {todoData.map((data)=>(
          <div key={data.id}>
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
          <div className='items-center'>
          <input type="checkbox" onChange={()=>handleCompleChange(data.id)} defaultChecked={false} />{" "}
          <span className={data.completed ? 'line-through' : undefined}>{data.title}</span>
          </div>
          <div className='items-center'>
          <button className='px-4 py-2 float-right' onClick={()=>handleClick(data.id)}>x</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}
