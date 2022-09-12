import React from 'react'

export default function List({todoData, setTodoData}) {

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: " 1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

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
          <div style={getStyle(data.completed)} key={data.id}>
          <p>
          <input type="checkbox" onChange={()=>handleCompleChange(data.id)} defaultChecked={false} />
          {" "}{data.title}
          <button style={btnStyle} onClick={()=>handleClick(data.id)}>x</button>
          </p>
        </div>
      ))}
    </div>
  )
}