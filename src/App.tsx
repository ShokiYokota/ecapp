import React from 'react';
import logo from './logo.svg';
import './App.css';
import { signInAction } from './reducks/users/actions';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => dispatch(signInAction({ userId: "12345", userName: "yokota" }))}></button>
      </header>
    </div>
  );
}

export default App;
