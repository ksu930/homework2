import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
    todos: todos
});  // 3. store 및 rootReducer 생성

const store = createStore(rootReducer);

export default store;