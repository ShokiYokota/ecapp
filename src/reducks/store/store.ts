import {
  createStore as reduxCreateStore, //名前を変えている（この後関数でcreateStoreが作ってる）
  combineReducers,
  applyMiddleware
}from 'redux';
import { connectRouter ,routerMiddleware } from 'connected-react-router';

//Import reducers
//import {ProductsReducer} from '../products/reducers';
import { UsersReducer } from '../users/reducers';

export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
};