import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../api";

import playstation4 from "../img/playstation4.svg";
import playstation5 from "../img/playstation5.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import xboxX from "../img/xboxseriesx.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import web from "../img/web.svg";

const getPlatform = (platform) => {
  if (platform.includes("PlayStation 4")) {
    return playstation4;
  } else if (platform.includes("Xbox One")) {
    return xbox;
  } else if (platform.includes("Xbox Series")) {
    return xboxX;
  } else if (platform.includes("PlayStation 5")) {
    return playstation5;
  } else if (platform === "PC") {
    return steam;
  } else if (platform === "Nintendo Switch") {
    return nintendo;
  } else if (platform.includes("OS")) {
    return apple;
  } else if (platform.includes("Web")) {
    return web;
  } else {
    return gamepad;
  }
};

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //Data
  const { detail, screen, isLoading } = useSelector((state) => state.details);
  const convertedRating = Math.floor(detail.rating * 20);
  const Rating = styled(motion.div)`
    display: inline-block;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 0.5rem;
    background-color: ${convertedRating > 50 ? "green" : "red"};
    p {
      color: white;
      font-size: 2rem;
    }
  `;
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`name ${pathId}`}>{detail.name}</motion.h3>
                <Rating>
                  <p>{convertedRating}</p>
                </Rating>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {detail.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                      title={data.platform.name}
                      key={data.platform.id}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(detail.background_image, 1280)}
                alt={detail.background_image}
              />
            </Media>
            <Description>
              <p>{detail.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    max-width: 8rem;
  }
`;
const Media = styled(motion.div)`
  img {
    width: 100%;
  }
  margin-top: 5rem;
`;
const Description = styled(motion.div)`
  margin: 5rem 10rem;
`;
const Rating = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: green;
  p {
    color: white;
    font-size: 2rem;
  }
`;
export default GameDetail;
