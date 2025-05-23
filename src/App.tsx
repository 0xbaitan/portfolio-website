import Button from "./components/Button";
import logo from "./logo.svg";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>Mooo</p>

        <a className={styles["App-link"]} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button />
      </header>
    </div>
  );
}

export default App;
