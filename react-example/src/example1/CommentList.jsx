import React from 'react';
import Comment from './Comment';


const comments = [
  {
    name: "서지원",
    comment: "안녕!"
  },
  {
    name: "서지원",
    comment: "안녕!"
  },
  {
    name: "서지원",
    comment: "안녕!"
  },
];

function CommentList(props){
  return(
    <div>
      {comments.map((comment)=>{
        return(
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;