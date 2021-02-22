const base_url = "https://api.rawg.io/api/";
let date = new Date();
const getCurrentMonth = () => {
  const month = date.getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = date.getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};

const year = date.getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = `${year}-${currentMonth}-${currentDay}`;
const lastYear = `${year - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${year + 1}-${currentMonth}-${currentDay}`;
//links
const upcoming_games = `games?dates=${currentYear},${nextYear}&ordering=-added&page_size=10`;
const popular_games = `games?dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`;
const new_games = `games?dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const gameDetailURL = (id) => `${base_url}games/${id}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
