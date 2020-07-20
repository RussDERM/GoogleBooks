import React from "react";
import './BookCard.css'

// *Bootstrap Import
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


// * Assign key values to book object..

const BookCard = props => {
  const { id, image, title, author, link, description, handleSavedButton} = props;
  
    return (
 <Card className="book">
              <Card.Img variant="top" className="cardImg" src={image} />
              <Card.Body>
                <Card.Title className="cardTitle">
                  <span className="cardTitleText">{`${title} - ${author}`}</span>
                </Card.Title>
                <hr className="hrSolid  "/>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <hr className="hrSolid  "/>
              <ListGroup id="lgStyle" className="list-group-flush" >
                <ListGroupItem id="lgicStyle" className="lgiContainer">
                  <a 
                  className="lgi" 
                  type='view' 
                  href={link} 
                  target='_blank'
                  rel="noopener noreferrer"
                  >
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