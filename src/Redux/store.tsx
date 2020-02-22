import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import loginReducer from "./Reducers/LoginReducer";
import registerReducer from "./Reducers/RegisterReducer";
import forgotReducer from "./Reducers/ForgotReducer";
import profileReducer from "./Reducers/ProfileReducer";
import booleanReducer from "./Reducers/BooleanReducer";
import shopReducer from "./Reducers/ShopReducer";
import usersReducer from "./Reducers/UsersReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    forgot: forgotReducer,
    profile: profileReducer,
    boolean: booleanReducer,
    shop: shopReducer,
    privateChat: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;