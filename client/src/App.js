import Saved from "./pages/Saved";
import Search from "./pages/Search"
import React, {BrowserRouter as Route,Switch,Link};
import './App.css';

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
