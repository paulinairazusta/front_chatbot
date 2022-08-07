import { useEffect, useState } from "react";
import axios from "axios";

function Plays() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    async function getPlays() {
      const response = await axios.get("http://localhost:3002/plays");
      setPlays(response.data);
    }
    getPlays();
  }, []);

  return (
    <ul>
      {plays.map((play) => {
        return <li>{play.name}</li>;
      })}
    </ul>
  );
}

export default Plays;
