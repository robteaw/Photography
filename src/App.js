// Import Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import CSS
import "./App.css";
import Navbar from "./components/Navbar";
// Import Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
