import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./serverHealth.module.css";

const STATUS = {
  UNKNOWN: "UNKNOWN",
  UP: "UP",
  DOWN: "DOWN",
};
export default function ServerHealth() {
  const [status, setStatus] = useState(STATUS.UNKNOWN);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get("http://localhost:3001/api/health");

        if (response.status === 200) return setStatus(STATUS.UP);
        setStatus(STATUS.DOWN);
      } catch (ex) {
        setStatus(STATUS.DOWN);
      }
    }
    fetchAPI();
  }, []);

  return <div className={styles.wrapper}>Health Status: {status}</div>;
}
