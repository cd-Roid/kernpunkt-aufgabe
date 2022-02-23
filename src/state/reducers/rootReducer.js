import {combineReducers} from "redux";
import testReducer from "./testReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
	//Declare all reducers here
	test: testReducer,
	products: productsReducer,
	cart: shoppingCartReducer,
});

export default rootReducer