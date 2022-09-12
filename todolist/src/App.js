// import React, { Component } from 'react';
import React, {useState} from 'react';
import List from './components/List';
import Form from './components/Form';

// export default class App extends Component {
export default function App() {

  const [ todoData, setTodoData ] = useState([]);
  const [ value, setValue ] = useState("");

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

    return(
      <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
        <div className='w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between wb-3'>
            <h1>할 일 목록</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData} />
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

        </div>
      </div>
    )
  }
