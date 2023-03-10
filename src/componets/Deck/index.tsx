import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import CTA from "../CTA/CTA";
import Modal from "../Modal";
import type { Card } from "./cardValues";
import cardValues from "./cardValues";

type Direction = "left" | "right" | "up" | "down";

const Deck: React.FC = () => {
  const cards = cardValues;
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);

  const [lastSentiment, setLastSetment] = useState(false);
  const [current, setCurrent] = useState<Card>(cards[0]);
  const [showModal, setShowModal] = useState(false);
  const childRefs = useMemo(
    () =>
      Array(cards.length)
        .fill(0)
        .map(() => React.createRef()),
    [cards.length]
  );

  const swipe = async (dir: Direction) => {
    if (currentIndex < cards.length) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await childRefs[currentIndex]?.current?.swipe(dir);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const outOfFrame = (card: Card, direction: Direction) => {
    console.log(card.name + " left the screen! ", direction);
    document.getElementById(card.name)?.remove();

    setLastSetment(direction === "left");
    setShowModal(true);
    setCurrent(card);
    setCurrentIndex(currentIndex - 1);
  };

  const hiddenHelperArrows =
    currentIndex === cards.length - 1 ? "md:block" : "hidden";

  if (currentIndex < 0 && showModal != true) {
    return <CTA />;
  }

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
      <div className="flex">
        <div className="align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={` animated   mt-32 pr-4 text-white animate__infinite animate__headShake  max-md:hidden  md:h-12 md:w-12 ${hiddenHelperArrows}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="cardContainer flex justify-center">
          {cards.map((card, index) => (
            <div key={card.name} id={card.name}>
              <TinderCard
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                ref={childRefs[index]}
                className="swipe"
                key={card.name}
                swipeRequirementType="position"
                onCardLeftScreen={(direction) => outOfFrame(card, direction)}
              >
                <div
                  style={{ backgroundImage: "url(" + card.url + ")" }}
                  className="card"
                >
                  <div className="absolute bottom-0	grid w-full grid-cols-1 justify-between rounded-b-lg bg-zinc-50 p-2  ">
                    <h3 className="text-lg text-zinc-800">{card.name}</h3>
                    <p className=" mb-1 pl-1 text-sm  text-zinc-600">
                      {card.bio}
                    </p>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mb-1 h-6 w-6 text-zinc-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <h4 className="  text-zinc-600">NYC</h4>
                    </div>
                  </div>
                </div>
              </TinderCard>
            </div>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={` animated  mt-32 pl-4 text-white animate__infinite animate__headShake max-md:hidden md:h-12 md:w-12 ${hiddenHelperArrows}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
      <div className="flex justify-center  gap-20 pt-8 lg:container lg:mx-auto">
        <button
          onClick={() => swipe("left")}
          className="rounded-full  bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="m-0 flex h-12 w-12 justify-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          onClick={() => swipe("right")}
          className="  rounded-full   bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 "
        >
          <img
            src="./img/security-camera.svg"
            alt="camera"
            className="m-0 flex h-12 w-12 justify-center invert"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="m-0 flex h-12 w-12 justify-center"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg> */}
        </button>
      </div>
    </div>
  );
};
Deck.displayName = "Deck";

export default Deck;
