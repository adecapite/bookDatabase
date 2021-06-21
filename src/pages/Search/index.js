import React from "react";
import Form from "../../components/form";
import Results from "../../components/results";
import API from "../../utilis/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();
    }

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            linkL
        }
    }
}