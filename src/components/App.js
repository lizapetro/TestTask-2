import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Login } from './Login';
import { Main } from './Main';


export function App () {
  const {users, autorization} = useSelector((state)=>state);
  return (
    <Router>
      <Route path='/' exact component={()=>{
        if (autorization) {
          return <Main autorization={autorization} />
        }else{
          window.location.href='/login';
          return null;
        }
      }}/>
      <Route path='/login' component={()=>
        <Login users={users} autorization={autorization} />}/>
    </Router>
  );
}