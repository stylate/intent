const initialState = {
  items: {},
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT":
      return initialState;
    case "ADD":
      return {
        ...state,
        items: action.items,
        total: action.total
      };
    default:
      return state;
  }
};

export default cartReducer;
