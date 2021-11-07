import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk"
import { converterReducer } from "./reducers/converterReducer";

let rootReducer = combineReducers({
    converter: converterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export type RootStoreType = ReturnType<typeof rootReducer>
export default store