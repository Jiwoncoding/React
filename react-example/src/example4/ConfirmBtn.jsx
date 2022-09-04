import React, { useState } from 'react';

// class ConfirmBtn extends React.Component{
//   constructor(props){
//     super(props);

//     this.state={
//       isConfirmd: false,
//     };

//     this.handleConfirm=this.handleConfirm.bind(this);
//   }

//   handleConfirm(){
//     this.setState((prevState)=>({
//       isConfirmd: !prevState.isConfirmd,
//     }));
//   }

//   render(){
//     return(
//       <button
//         onClick={this.handleConfirm}
//         disabled={this.state.isConfirmd}
//         >
//           {this.state.isConfirmd ? "확인완료" : "확인하기"}
//         </button>
//     );
//   }
// }


function ConfirmBtn(props){
  const [ isConfirmed, setIsConfirmed ] = useState(false);

  const handleConfirm=()=>{
    setIsConfirmed((prevIsConfirmed)=>!prevIsConfirmed);
  };

  return(
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인완료" : "확인하기"}
    </button>
  );
}

export default ConfirmBtn;