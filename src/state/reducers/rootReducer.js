import {combineReducers} from "redux";
import testReducer from "./testReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
	//Declare all reducers here
	test: testReducer,
	products: productsReducer,
});

export default rootReducer