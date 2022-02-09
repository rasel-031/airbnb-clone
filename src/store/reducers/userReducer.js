const initialState = {
  users: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CUSTOMER_LOGIN_DATA":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
