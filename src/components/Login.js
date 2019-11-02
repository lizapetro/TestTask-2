import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ENTER_USER } from '../constantsAction';


export function Login ({users,autorization}) {

  const [name, setName] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError]=useState(false);
  const dispatch = useDispatch();

  function checkData (name,password) {
    if (users.filter(user=>(user.name===name && user.password===password)).length!==0){
        dispatch({
          type: ENTER_USER,
        });
        setError(false);
    } else {
      setError(true);
      setName('');
      setPassword('');
    }
  }
  if (autorization) {
    return <Redirect to='/'/>
  }
  return (
    <div className='form'>
      <h1>Autorization</h1>
      <label>
        Name: <input value={name} type='text' name='name' onChange={(e) => {
          setName(e.target.value);
          setError(false);
        }}/>
      </label>
      <label>
        Password: <input value={password} type='text' name='password' onChange={(e) => {
          setPassword(e.target.value);
          setError(false);
        }}/>
      </label>
      <input className='enter' type='button' value='Enter' name='check' onClick={(e)=>{
        if (e.target.name==='check') {
          checkData(name,password)
        }
      }}/>
      {error ? <div>Имя пользователя или пароль введены неверно</div>:null}
    </div>
  );
}