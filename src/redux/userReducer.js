import * as ActionTypes from "./ActionTypes";

const user = { name: "", email: "", password: "", isAuthUser: false };
export const UserReducer = (state = user, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, isAuthUser: action.payload };

    case ActionTypes.SET_USER:
      const { name, email, password, isAuthUser } = action.payload;
      return {
        ...state,
        name: name,
        email: email,
        password: password,
        isAuthUser: isAuthUser,
      };

    default:
      return state;
  }
};
