import logo from "./logo.png";
import Header from "./components/Header"
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="Page2"></div>

      <div className="Page3"></div>
    </div>
  );
}

export default App;
