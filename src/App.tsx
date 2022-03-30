import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Sol from "./pages/sol";
import Eth from "./pages/eth";
import Land from "./pages/land";

const App = () => {

  return (
  <Router>
    <Route path="/" exact component={Land} />
    <Route path="/SOL" exact component={Sol} />
    <Route path="/ETH" exact component={Eth} />
  </Router>
  );
};

export default App;
