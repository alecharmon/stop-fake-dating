export interface Card {
  readonly name: string;
  readonly url: string;
  readonly body: string;
  readonly cta: string;
  readonly bio: string;
}

type FixedSizeArray<N extends number, T> = N extends 0
  ? never[]
  : {
      0: T;
      length: N;
    } & ReadonlyArray<T>;

const cardValues: FixedSizeArray<3, Card> = [
  {
    name: "Drones",
    url: "./img/drones.jpg",
    body: "The ability to have video surveillance of anywhere in the city? Creepy. What if this popped up in your window? And as we know, the NYPD can get hand-me-downs from the military… and there are militarized drones out there… ",
    bio: "Searching for The One. Happy to see other people in the meantime… And I promise, I’ll always come to you.",
    cta: "S.T.O.P. is fighting to ban police drones that chill our First Amendment rights – and kill the vibe.",
  },
  {
    name: "Catfish Cop",
    url: "./img/fakeprofiles.png",
    body: "Police use software to create thousands of fake profiles on social media, which they use to trick youth, activists, and other New Yorkers into sharing personal information like who they spend their time with and where they go.",
    bio: "I just want to get to know the real you. Let’s be friends… and we can find out if there’s something more… Happy to meet up at a protest!",
    cta: "S.T.O.P. is calling on lawmakers to stop cops from catfishing, learning intimate details of our lives without a warrant.",
  },
  {
    name: "OMNY",
    url: "./img/omny.jpg",
    body: "While the MTA’s new tap-to-pay system is convenient, it also collects information about your every move, connects it to your credit card (which knows even more about you), and has few privacy protections, meaning it can be accessed by the NYPD.",
    cta: "S.T.O.P. is demanding the right to move through our city without being watched – as well as an affordable cash option for the subway.",
    bio: "I love making your morning COMMUTE smooth…",
  },
];

export default cardValues;
