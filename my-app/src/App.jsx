import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Benefits />
      <Team />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
