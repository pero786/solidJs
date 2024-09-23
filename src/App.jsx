import styles from './App.module.css';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './Login';
import MyComponent from'./MyComponent';

function App() {
  return (
    <>
    <div class={styles.App}>
          SHARKY3102
          
    </div>
    <MyComponent/>
    <Counter/>
    <Counter2></Counter2>
    <Login/>
  </>
  );
}

export default App;
