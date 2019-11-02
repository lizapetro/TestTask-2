import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { EXIT_USER } from '../constantsAction';


export function Header({autorization}) {
  const dispatch = useDispatch();

  return (
    <header>
      <div className='header'>
        <div className='logo'>TechCrunch</div>
        <div className='tabs'>
          <Link to='/'>Home</Link>
          <Link to='/login' onClick={() => {
            dispatch({
              type: EXIT_USER
            });
          }}>{autorization ? 'Exit' : 'Enter'}</Link>
        </div>
      </div>
      <div className='preview'>
        Top headlines from TechCrunch right now
      </div>
    </header>
  );
}