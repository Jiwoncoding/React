import React from 'react';
import List from './List';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Lists({todoData, setTodoData}) {

  const handleEnd = (result) => {
    console.log(result);
    if(!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newTodoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 삭제
    // 2. return 값을 지워진 아이템으로 잡아주기
    const [ reorderedItem ] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 삽입
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };



  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='to-dos'>
          {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
      {todoData.map((data,index)=>(
        <Draggable
        key={data.id} draggableId={data.id.toString()}
        index={index} >
          {(provided, snapshot)=>(
            <List
             key={data.id}
             id={data.id}
             title={data.title}
             completed={data.completed}
             todoData={todoData}
             setTodoData={setTodoData}
             provided={provided}
             snapshot={snapshot}
            />
      )}
        </Draggable>
      ))}
      {provided.placeholder}
      </div>
      )}
      </Droppable>
      </DragDropContext>
    </div>
  )
}
