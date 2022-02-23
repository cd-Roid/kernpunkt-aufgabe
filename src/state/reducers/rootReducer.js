import {combineReducers} from "redux";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
    //Declare all reducers here
    test: testReducer,
})

export default rootReducer