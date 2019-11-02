import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Login } from './Login';
import { Main } from './Main';
import { Header } from './Header';


export function App () {
  const {users, autorization} = useSelector((state)=>state);
  return (
    <Router>
      <Header autorization={autorization}/>
      <Route path='/' exact component={()=>{
        if (autorization) {
          return <Main autorization={autorization} />
        }else{
          return <Redirect to='/login'/>
        }
      }}/>
      <Route path='/login' component={()=>
        <Login users={users} autorization={autorization} />}/>
    </Router>
  );
}