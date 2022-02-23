//This will be set to Redux an initialization
const initialState = [];

const productsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "GET_ALL_PRODUCTS":
			//Sets all Products into State, overwrites old Product State
			return [{ products: payload }];
		//Default case, just returns the initialState/currentState
		default:
			return state;
	}
};

export default productsReducer;
