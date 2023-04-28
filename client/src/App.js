import { FaBitcoin } from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaBitcoin size="48px" style={{ margin: "10px", marginTop: "12px", color: "#F2A900"}}/>
        <h1>Bitcoin Budget</h1>
      </header>
      <main>
        <p>Welcome to the Bitcoin Budget app</p>
      </main>
    </div>
  );
}

export default App;
