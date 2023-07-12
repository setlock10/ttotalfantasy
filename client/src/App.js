import { BrowserRouter, Switch, Route } from "react-router-dom";
import Picks from "./Picks.js"
import './App.css';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/Picks">
    //       <Picks/>
    //     </Route>
    //     </Switch>
    // </BrowserRouter>
    <div>
      <Picks/>
    </div>

  );
}

export default App;
