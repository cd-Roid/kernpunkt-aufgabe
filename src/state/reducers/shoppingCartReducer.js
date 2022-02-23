//This will be set to Redux an initialization
const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "ADD_TO_CART":
			//Sets all Products into State, overwrites old Product State
			return [{ cart: payload }];
		case "REMOVE_FROM_CART":
			//Sets all Products into State, overwrites old Product State
			return [{ cart: payload }];
		//Default case, just returns the initialState/currentState
		default:
			return state;
	}
};

export default shoppingCartReducer;
