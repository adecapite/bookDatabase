import React,  { Component } from "react";
import API from "../utilis/API";

class Results extends Component {
    state = {
        savedBooks: [],
    }
    componentDidMount(){
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.error(err));
    }

    handleSave = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
            .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
            .catch(err => console.err(err));
        }
    }
}