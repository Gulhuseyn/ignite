import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../api";
import { motion } from "framer-motion";
const Game = ({ name, date, url, id }) => {
  const stringId = id.toString();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame layoutId={stringId} onClick={() => clickHandler()}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`name ${stringId}`}>{name}</motion.h3>
        <p>{date}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(url, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};
export default Game;
const StyledGame = styled(motion.div)`
  cursor: pointer;
  text-align: center;
  border-radius: 1rem;
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
