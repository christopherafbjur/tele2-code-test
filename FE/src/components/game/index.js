import axios from "axios";
import { useState } from "react";
import GameControls from "./controls";
import styles from './index.module.css';
import GameResult from "./result";

export default function Game() {
  const [result, setResult] = useState(null);
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api/game", data);
      setResult(response.data)
    } catch (ex) {
      console.error("Game form error:", ex);
    }
  };

  return (
    <div className={styles.wrapper}>
      <GameControls onSubmit={handleSubmit} />
      <GameResult result={result} />
    </div>
  );
}
