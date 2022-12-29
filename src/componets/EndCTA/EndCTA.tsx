import React, { useMemo } from "react";
import { Card } from "../Deck/cardValues";
import emoji from "react-easy-emoji";
import { Easing } from "react-native-web";
import Fly from "react-flying-objects";

const DELAY = 1000;
const DURATION = 5000;
const SIZE = 25;
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

export default function EndCTA() {
  const objectConfig = useMemo(
    () => ({
      // Config for a single flying object which would fly in a moment
      right: {
        fromValue: 0,
        toValue: 800,
        duration: DURATION,
        delay: DELAY,
      },
      top: {
        fromValue: random(100, 200),
        toValue: random(100, 200),
        duration: DURATION,
        easing: Easing.elastic(5),
        delay: DELAY,
      },
      width: {
        fromValue: random(SIZE - 10, SIZE + 10),
        toValue: SIZE,
        duration: DURATION,
        easing: Easing.elastic(5),
        delay: DELAY,
      },
      height: {
        fromValue: random(SIZE - 10, SIZE + 10),
        toValue: SIZE,
        duration: DURATION,
        easing: Easing.elastic(5),
        delay: DELAY,
      },
      opacity: {
        fromValue: 1,
        toValue: 0,
        duration: DURATION,
        easing: Easing.exp,
        delay: DELAY,
      },
    }),
    [animatedEmoji]
  );
  return <></>;
}
