import React from "react";
import "./ResultsBox.css";
import BookCard from '../BookCard/BookCard'


// *Bootstrap Import
import CardColumns from "react-bootstrap/CardColumns";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";



const ResultsBox = props => {

  const descriptionLength = 200;
  const truncDescription = string => {
    if (string.length <= 200) {
      return string
    }
    // else
    return string.slice(0, descriptionLength) + "..."
  }
  
  return (
    <div className="resultsBox">
      <CardColumns>
        {props.books.map(book => {
          return (
            <BookCard 
            className="bookCard"
            key={book.link}
            id={book.id}
            title={book.title}
            author={book.author}
            shortDescription={truncDescription(book.description)}
            description={book.description}
            link={book.link}
            image={book.image}
            handleSavedButton={props.handleSavedButton}
            
            />
          );
        })}
      </CardColumns>
    </div>
  );
};
// <p>{book.title}</p>
// <p>{book.author}</p>
// <p>{book.description}</p>

export default ResultsBox;
