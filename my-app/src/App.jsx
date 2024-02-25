import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="menu">Home</div>
        <div className="menu">Services</div>
        <div className="menu">Benefits</div>
        <div className="menu">Team</div>
        <div className="menu">Blog</div>
        <div className="menu">Contact</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="Page2"></div>

      <div className="Page3"></div>
    </div>
  );
}

export default App;
