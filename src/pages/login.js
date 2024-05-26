import React, { useContext, useState } from 'react';
import AppContext from '../../Context';
import { useNavigate } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';

export default function LoginForm() {


  return (
    <div>
      <section>
        <form onSubmit={handleLogin}>
          <div role='alert'>{error && <p>{error.error}</p>}</div>

          <label htmlFor='email'>
            Email Address:
          </label>
          <input type='email' name='email' required></input>
          <label htmlFor='password'>
            Password:
          </label>
          <input type='password' name='password' required></input>

          <button type='submit'>
            Login
          </button>
        </form>
      </section>
    </div>
  );
}
