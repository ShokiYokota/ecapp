import { UserState } from "./types";

export const SIGN_IN  = "SIGN_IN";  //ユーザーがサインインしたらStateを変更してね　Redusersでimportして使うためにexport
export const signInAction = (userState:UserState) => { //userState=Object型でkeyにuserIdとuserNameを持っている
  return { 
    type: "SIGN_IN",
    payload: {   //payload=データの塊
      isSignedIn: true,
      userId: userState.userId,
      userName: userState.userName
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = ()=>{
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false, //初期値に戻す
      userId: "",
      userName: ""
    }
  }
};