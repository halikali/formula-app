import { useEffect, useState } from "react";
import AllRacers from "./Component/AllRacers";
import "./styles.css";

const App = () => {
  const [races, setRaces] = useState([]);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    fetch(`https://ergast.com/api/f1/2020/results/1.json`)
      .then((response) => response.json())
      .then((data) => {
        setRaces(data.MRData.RaceTable.Races);
      })
      .catch((error) => console.error(error));

    fetch("https://ergast.com/api/f1/2020/driverStandings.json")
      .then((response) => response.json())
      .then((data) => {
        const raceWinnerFirstName =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
            .givenName;
        const raceWinnerLastName =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
            .familyName;
        setWinner(`${raceWinnerFirstName} ${raceWinnerLastName}`);
      })
      .catch((error) => console.error(error));
  }, []);

  console.warn(winner);

  return (
    <div className="App">
      <h1>F1 Racers of 2020</h1>
      <AllRacers races={races} winner={winner} />
    </div>
  );
};

export default App;
