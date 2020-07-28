import React from "react";
import './BookCard.css'

// *Bootstrap Import
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


// * Assign key values to book object..

const BookCard = props => {
  const { id, image, title, author, link, shortDescription, description, handleSavedButton} = props;
  
    return (
 <Card className="book">
              <Card.Img variant="top" className="cardImg" src={image} />
              <Card.Body>
                <Card.Title className="cardTitle">
                  {/* Title and Author */}
                  <span className="cardTitleText">{`${title} - ${author}`}</span>
                </Card.Title>
                <hr className="hrSolid  "/>
                {/* short description */}
                <Card.Text>{shortDescription}</Card.Text>
              </Card.Body>
              <hr className="hrSolid  "/>
              <ListGroup id="lgStyle" className="list-group-flush" >
                <ListGroupItem id="lgicStyle" className="lgiContainer">
                  <div className="lgi">
                    {/* view link */}
                    <button>
                      <a 
                        className="lgii" 
                        type='view' 
                        href={link} 
                        target='_blank'
                        rel="noopener noreferrer"
                      >
                        View
                        {/* <i className="view far fa-eye"> </i> */}
                      </a>
                    </button>
                  </div>
                  {/* save button */}
                  <div className="lgi">
                    <button id={id} className="saveBook" onClick={(event) => {
                      console.log(event.target.id)
                      handleSavedButton(event)
                    }
                      }>
                        <p>
                    Save
                        </p>
                    {/* <i className="save far fa-heart"> </i> */}
                    </button>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
    )
}


export default BookCard