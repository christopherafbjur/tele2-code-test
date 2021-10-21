import styles from './app.module.css';
import Game from './game';
import ServerHealth from './serverHealth';

function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <ServerHealth />
      </header>
        <Game/>
    </div>
  );
}

export default App;
