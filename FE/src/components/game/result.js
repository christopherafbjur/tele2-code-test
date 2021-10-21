import styles from './result.module.css';

export default function GameResult({ result }) {
  return (
    <div className={styles.wrapper}>
      {!result && <p>Du har inte spelat ännu!</p>}
      {result && (
        <>
          <p>Vinster: <span style={{color: 'green'}}>{result.wins}</span></p>
          <p>Förluster: <span style={{color: 'red'}}>{result.losses}</span></p>
        </>
      )}
    </div>
  );
}
