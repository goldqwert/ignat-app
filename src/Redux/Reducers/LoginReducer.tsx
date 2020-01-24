import { auth } from "../../API/api";

const LOGIN = "LOGIN";

const initialState = {};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        state
      };
  }
  return state;
};

// interface ILogin {
//     type:typeof LOGIN
// }
// type LoginActionsTypes=ILogin

// export const loginAC=()=> {
//     return{type:LOGIN}
// }

export default loginReducer;

export const login = (login: string, password: any, remember: boolean) => {
  return async (dispatch: any) => {
    try {
      // dispatch(loadingAC())
      await auth.login(login, password, remember);
      // dispatch(redirectAC())
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      // dispatch(unloadingAC())
    }
  };
};
