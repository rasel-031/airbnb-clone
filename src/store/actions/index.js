export const user_post_login_data = (users) => {
  return {
    type: "CUSTOMER_LOGIN_DATA",
    payload: users,
  };
};

export const signup_btn_toggle = (active, inActive) => {
  return {
    type: "SIGN_UP_TOGGLE",
    payload: { active: active, inActive: inActive },
  };
};

// export const signup_btn_toggle_off = (activeStatus) => {
//   return {
//     type: "SIGN_UP_TOGGLE_OFF",
//     payload: activeStatus,
//   };
// };
