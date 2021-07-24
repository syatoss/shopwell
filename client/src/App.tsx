import React from 'react';
import './App.css';
import { useState } from 'react'
import LoginPage from './components/LoginPage/LoginPage'

const App = ()=> {

  const [ contentPage , setContentPage ] = useState('login')


  const firstPage = ():JSX.Element => {
    if(contentPage === 'login'){
      return (
        <LoginPage/>
      )
    }
    return (
      <div>
        this is the main page
      </div>
    )
  }
  return (
    <div className="app">
      {firstPage()}
    </div>
  );
}

export default App;
