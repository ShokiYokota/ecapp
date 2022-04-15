import React from 'react';
import logo from './logo.svg';
import './App.css';
import { signInAction } from './reducks/users/actions';
import { useDispatch,useSelector } from 'react-redux';
import {RootStateType} from "./reducks/users/types"

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state:RootStateType) => state);
  console.log(selector);

  return (
    <div>
      <button type = "button" onClick={()=>dispatch(signInAction({userId:"1234",userName: "kirua"}))}>
        Sign In
      </button>
    </div>
  );
}
export default App;