// import React, { Component } from 'react';
import React, {useState} from 'react';

// export default class App extends Component {
export default function App() {

  const [ todoData, setTodoData ] = useState([]);
  const [ value, setValue ] = useState("");

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

  const handleChange = (e) => {
    console.log('e', e.target.value);
    // setState({value: e.target.value});
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // form안에 input을 전송할 때 페이지 리로드되는 것을 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 추가
    // setState({todoData: [...todoData, newTodo], value: ""});
    setTodoData(prev=>[...prev, newTodo]);
    setValue("");
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

    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>


          {todoData.map((data)=>(
          <div style={getStyle(data.completed)} key={data.id}>
          <p>
          <input type="checkbox" onChange={()=>handleCompleChange(data.id)} defaultChecked={false} />
          {" "}{data.title}
          <button style={btnStyle} onClick={()=>handleClick(data.id)}>x</button>
          </p>
        </div>
          ))}

          <form style={{display:'flex'}} onSubmit={handleSubmit}>
            <input type="text" name="value" style={{flex:'10', padding: '5px'}} placeholder="할 일을 입력하세요"
                  value={todoData.value} onChange={handleChange} />
            <input type="submit" value="추가" className="btn" style={{flex: '1'}} />
          </form>

        </div>
      </div>
    )
  }
