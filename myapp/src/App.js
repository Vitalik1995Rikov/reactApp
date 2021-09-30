const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function App() {
  return (
    <div className="App">
      <ul styles={styles.ul}>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
}

export default App;
