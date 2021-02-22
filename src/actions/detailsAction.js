import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";
export const loadDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  const detailData = await axios.get(gameDetailURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      detail: detailData.data,
      screen: screenShotData.data,
    },
  });
};
