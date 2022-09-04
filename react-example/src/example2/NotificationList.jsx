import React from 'react';
import Notification from './Notification';

const reservedNofifications = [
  {
    message: "오늘의 일정 안내"
  },
  {
    message: "맛점"
  },
  {
    message: "곧 미팅시작"
  },
];

var timer;

class NotificationList extends React.Component{
  constructor(props){
    super(props);

    this.state={
      notifications: [],
    };
  }

  componentDidMount(){
    const { notifications } = this.state;
    timer = setInterval(()=>{
      if(notifications.length< reservedNofifications.length){
        const index = notifications.length;
        notifications.push(reservedNofifications[index]);
        this.setState({
          notifications: notifications,
        });
      }else{
        clearInterval(timer);
      }
    }, 2000);
  }

  render(){
    return(
      <div>
        {this.state.notifications.map((notification)=>{
          return <Notification message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;