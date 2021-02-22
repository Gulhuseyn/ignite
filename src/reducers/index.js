import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailsReducer from "./detailsReducer";
// store can only accept one reducer,so we have to combine them
const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});
export default rootReducer;
