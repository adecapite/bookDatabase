import React, { Component } from "react";
import API from "../utilis/API"
import Results from "../components/results";

class Saved extends Component {
    state = {
        savedBooks: [],
    }
    componentDidMount() {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.error(err));
    }

render () {
    return (
        <div>
            <h2 className="text-center"> Saved Books</h2>
            <Results books={this.state.savedBooks} />
        </div>
    )
}

}
export default Saved;