const initialState = {
  activeStatus: {
    active: false,
    inActive: true,
  },
};

const signupToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_TOGGLE":
      return {
        ...state,
        activeStatus: {
          active: action.payload.active,
          inActive: action.payload.inActive,
        },
      };

    default:
      return state;
  }
};

export default signupToggleReducer;
