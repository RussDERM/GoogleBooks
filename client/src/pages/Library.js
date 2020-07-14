import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import ResultsBox from "../components/ResultsBox/ResultsBox";
import "../components/ResultsBox/ResultsBox.css";




class SaveBook extends Component {
    state = {
        savedBooks: []
    };
    //get all books in db on mount
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }
    //remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid className="container">
                <ResultsBox className="resultsBox" 
                    books={this.state.savedBooks}
                    handleSavedButton={this.handleSavedButton}
               />

            </Container>
        )
    }
}



export default SaveBook 