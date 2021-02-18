import "./App.css";

import NavBar from "./Component/NavBar/NavBar";
import Header from "./Component/Header/Header";
import Games from "./Component/Games/Games";
import About from "./Component/About/About";

const games = [
  {
    name: ".hack//frägment",
    details: ["Sony PlayStation 2 exclusive"],
    id: "ps27",
    igdbId: 11811,
    gbId: 30691,
    gbGuid: "3030-30691",
    tgdbId: 20772,
    isExclusive: [
      {
        name: "Sony Playstation 2",
        id: "ccl21",
        igdbId: 8,
        gbId: 19,
        gbGuid: "3045-19",
        tgdbId: 11,
      },
    ],
    isLaunchTitle: false,
    special: [],
  },
  {
    name: "10,000 Bullets",
    details: ["Sony PlayStation 2 exclusive"],
    id: "ps28",
    igdbId: 14727,
    gbId: 23711,
    gbGuid: "3030-23711",
    tgdbId: 18703,
    isExclusive: [
      {
        name: "Sony Playstation 2",
        id: "ccl21",
        igdbId: 8,
        gbId: 19,
        gbGuid: "3045-19",
        tgdbId: 11,
      },
    ],
    isLaunchTitle: false,
    special: [],
  },
  {
    name: "24: The Game",
    details: ["Sony PlayStation 2 exclusive"],
    id: "ps29",
    igdbId: 6062,
    gbId: 13700,
    gbGuid: "3030-13700",
    tgdbId: 5854,
    isExclusive: [
      {
        name: "Sony Playstation 2",
        id: "ccl21",
        igdbId: 8,
        gbId: 19,
        gbGuid: "3045-19",
        tgdbId: 11,
      },
    ],
    isLaunchTitle: false,
    special: [],
  },
  {
    name: "2nd Super Robot Wars Original Generation",
    details: ["Sony PlayStation 2 exclusive"],
    id: "ps210",
    igdbId: 80450,
    gbId: 22660,
    gbGuid: "3030-22660",
    tgdbId: 21378,
    isExclusive: [
      {
        name: "Sony Playstation 2",
        id: "ccl21",
        igdbId: 8,
        gbId: 19,
        gbGuid: "3045-19",
        tgdbId: 11,
      },
    ],
    isLaunchTitle: false,
    special: [],
  },
  {
    name: "7 Blades",
    details: ["Sony PlayStation 2 exclusive"],
    id: "ps211",
    igdbId: 27622,
    gbId: 26491,
    gbGuid: "3030-26491",
    tgdbId: 27847,
    isExclusive: [
      {
        name: "Sony Playstation 2",
        id: "ccl21",
        igdbId: 8,
        gbId: 19,
        gbGuid: "3045-19",
        tgdbId: 11,
      },
    ],
    isLaunchTitle: false,
    special: [],
  },
  {
    name: "A.C.E.: Another Century's Episode",
    details: ["Sony PlayStation 2 exclusive"],
    id: "ps212",
    igdbId: 9566,
    gbId: 26524,
    gbGuid: "3030-26524",
    tgdbId: 41762,
    isExclusive: [
      {
        name: "Sony Playstation 2",
        id: "ccl21",
        igdbId: 8,
        gbId: 19,
        gbGuid: "3045-19",
        tgdbId: 11,
      },
    ],
    isLaunchTitle: false,
    special: [],
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Games games={games} />
      <About />
    </div>
  );
}

export default App;
