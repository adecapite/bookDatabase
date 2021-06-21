import Saved from "./pages/Saved";
import Search from "./pages/Search";
import React, {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Route exact path="/search" component={Search} />
    <Route exact path="/saved" component={Saved} />
    </Router>
   
    </>
  );
}

export default App;
