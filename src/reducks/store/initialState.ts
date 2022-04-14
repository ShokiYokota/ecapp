import { UserState } from "../users/types";

const initialState : UserState = {
    icon: "",
    isSignedIn: false, //サインインしているかどうか　
    userId: 0,
    userName: ""
  };


export default initialState