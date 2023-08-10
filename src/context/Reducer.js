const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFethcing: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFethcing: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFethcing: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFethcing: false,
        error:false,
      };
    default:
      return state;
  }
};

export default Reducer;
