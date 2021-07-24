import './LoginPage.css';
import { useState } from 'react';

const LoginPage = ()=> {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  let welocmeMessage = 'Wellcome Please Login'

  return (
    <form className='LoginPage'>

      <span className='LoginPage-head'>
        {welocmeMessage}
      </span>

      <input
        type='text'
        placeholder='Email'
        className='LoginPage-input'
      />

      <input
        type='password'
        placeholder='Password'
        className='LoginPage-input'
      />

    <div className='LoginPage-horisontal'>

      <button className='LoginPage-loginBtn' >
        Login
      </button>

      <button className='LoginPage-loginBtn' >
        Register
      </button>


    </div>

    </form>
  );
}

export default LoginPage;
