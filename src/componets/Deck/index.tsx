import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  ReactElement,
} from "react";
import TinderCard from "react-tinder-card";
import Modal from "../Modal";
import cardValues, { Card } from "./cardValues";

type Direction = "left" | "right" | "up" | "down";

export default () => {
  const characters = cardValues;
  const [lastDirection, setLastDirection] = useState();
  const [lastSentiment, setLastSetment] = useState(false);
  const [current, setCurrent] = useState<Card>(characters[0]);
  const [showModal, setShowModal] = useState(false);

  const swiped = (direction: any, nameToDelete: any) => {
    console.log(showModal);
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (card: Card, direction: Direction) => {
    console.log(card.name + " left the screen! ", direction);
    setLastSetment(direction === "left");
    setShowModal(true);
    setCurrent(card);
  };

  console.log(showModal);
  return (
    <div>
      {showModal && (
        <Modal
          showModal
          value={current}
          setmeniment={lastSentiment}
          setShowModal={setShowModal}
        ></Modal>
      )}
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            swipeRequirementType="position"
            onCardLeftScreen={(direction) => outOfFrame(character, direction)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="m-2 flex flex-row content-center pt-8 lg:container lg:mx-auto">
        <button className="m-2 flex-1 items-center rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="flex h-6 w-6	"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
        <button className="m-2 flex-1 items-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="flex h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
