import * as ActionTypes from "./ActionTypes";

const user = {
  name: "",
  email: "",
  password: "",
  isAuthUser: false,
  tipsOn: true,
};

export const UserReducer = (state = user, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, isAuthUser: action.payload };

    case ActionTypes.SET_USER:
      const { name, email, password } = action.payload;
      console.log(user);
      return {
        ...state,
        name: name,
        email: email,
        password: password,
        isAuthUser: true,
        tipsOn: true,
      };

    case ActionTypes.TOGGLE_TIPS:
      console.log(state);
      return {
        ...state,
        tipsOn: !state.tipsOn,
      };

    default:
      return state;
  }
};
