import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  //as soon as page loads,activate action-loadGames which fetches the data from api
  const dispatch = useDispatch();
  //dispatch is like a fire button,it activates the action
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  //fetching the data from our global state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <h1>Home</h1>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((each) => (
            <Game
              name={each.name}
              date={each.released}
              url={each.background_image}
              id={each.id}
              key={each.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              date={game.released}
              id={game.id}
              url={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              date={game.released}
              id={game.id}
              url={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h1 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
