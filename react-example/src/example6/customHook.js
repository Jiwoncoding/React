import { useState, useEffect } from 'react';

export default function useUser(userId){
const [ user, setUser ] = useState(null);
useEffect(()=>{
  getUserApi(userId).then(data=>setUser(data));
}, [userId]);
return user;
}


const USER1 = {name: "mike", age:20};
const USER2 = {name: "jin", age:29};
function getUserApi(userId){
  return new Promise(res =>{
    setTimeout(()=>{
      res(userId%2 ? USER1 : USER2);
    }, 500);
  });
}