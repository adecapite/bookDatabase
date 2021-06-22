import Saved from "./pages/saved"
import Search from "./pages/search"
import React, {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/header";
import { Component } from "react";


class App extends Component {
  render (){
    return (
      
      <Router>
        <div>
      <Navbar />
      <Header />
      <Route exact path ="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
        </div>
      
      </Router>
     
      
    )
  };
};



export default App;
