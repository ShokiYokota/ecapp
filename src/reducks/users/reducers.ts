import * as Actions from './actions';
import initialState from '../store/initialState';

export const UsersReducer = (state = initialState.users,action)=>{
  switch(action.type){
    case Actions.SIGN_IN:
      return {
        ...state,//初期の状態（initialSatas.users）を展開
        ...action.payload //変更される状態(actionで渡される)を上書きしマージしてreturn
      }
      
    default:
      return state
  }
}
