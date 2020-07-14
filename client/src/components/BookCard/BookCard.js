import React from "react";


// *Bootstrap Import
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

// * Assign key values to book object..

const BookCard = props => {
  const { id, image, title, author, link, description, handleSavedButton} = props;
  
    return (
 <Card className="book">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>
                  <span className="title">{`${title} - ${author}`}</span>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="lgiContainer">
                  <a className="lgi" type='view' href={link} target='_blank'>
                    View
                    <i className="view far fa-eye"> </i>
                  </a>
                  <div className="lgi">
                    <button id={id} className="saveBook" onClick={(event) => {
                      console.log(event.target.id)
                      handleSavedButton(event)
                    }
                      }>
                    Save
                    <i className="save far fa-heart"> </i>
                    </button>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
    )
}


export default BookCard