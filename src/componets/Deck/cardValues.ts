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
    bio: "The ability to have video surveillance of anywhere in the city? Creepy. What if this popped up in your window? And as we know, the NYPD can get hand-me-downs from the military… and there are militarized drones out there… "
  },
  {
    name: "Fake Profiles",
    url: "./img/fakeprofiles.jpg",
    body: "The NYPD makes fake profiles on social media sites, particularly in order to find out about protests, activist movements, and where you’ll be… so they can go arrest you. Yikes!",
    bio: "I just want to get to know the real you. Let’s be friends… and we can find out if there’s something more… Happy to meet up at a protest!"
  },
  {
    name: "OMNY",
    url: "./img/omny.jpg",
    body: "While OMNY is convenient, it also collects information about your every move, connects it to your credit card (which knows even more about you), and makes all that data accessible to the NYPD.",
    bio: "Looking for an easy ride? Tap me. 😘 I love making your morning smooth…"
  },
] 

export default cardValues
