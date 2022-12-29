export interface Card {
  readonly name: string;
  readonly url: string;
  readonly body: string;
  readonly bio: string;
}


type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
    0: T;
    length: N;
} & ReadonlyArray<T>;

const cardValues: FixedSizeArray<3, Card> = [
  {
    name: "Drones",
    url: "./img/drones.jpg",
    body: "here are all the ways that drones are bad",
    bio: "Searching for The One. Happy to see other people in the meantime… And I promise, I’ll always come to you."
  },
  {
    name: "Fake Profiles",
    url: "./img/fakeprofiles.jpg",
    body: "police use bots to create a bunch of fake profiles",
    bio: "I just want to get to know the real you. Let’s be friends… and we can find out if there’s something more… Happy to meet up at a protest!"
  },
  {
    name: "OMNY",
    url: "./img/omny.jpg",
    body: "why does the NYPD need to know about your commute",
    bio: "Looking for an easy ride? Tap me. 😘 I love making your morning smooth…"
  },
] 

export default cardValues
