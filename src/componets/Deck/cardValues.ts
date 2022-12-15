export interface Card {
  name: string;
  url: string;
  body: string;
}

const cardValues  = [
  {
    name: "Drones",
    url: "./img/drones.jpg",
    body: "here are all the ways that drones are bad"
  },
  {
    name: "Fake Profiles",
    url: "./img/fakeprofiles.jpg",
    body: "police use bots to create a bunch of fake profiles",
  },
  {
    name: "Omny Spying",
    url: "./img/omny.jpg",
    body: "why does the NYPD need to know about your commute",
  },
] as const;
export default cardValues
