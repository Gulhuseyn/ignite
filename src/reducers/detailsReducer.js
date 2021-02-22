const initState = {
  detail: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};
const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        detail: action.payload.detail,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
export default detailsReducer;
