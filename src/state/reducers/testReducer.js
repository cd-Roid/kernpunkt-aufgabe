//This will be set to Redux an initialization
const initialState = [{hello: 1}]

const testReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case "TEST":
            //Sets all Products into State, overwrites old Product State
            return [{hello: payload}]
            //Default case, just returns the initialState/currentState
        default:
            return state
    }
}

export default testReducer