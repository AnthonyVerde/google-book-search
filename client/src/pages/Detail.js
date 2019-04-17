import React, { Component } from "react";
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal}>
                View Details
                </Button>
            <Modal
            show = {this.state.modalOpen}
            onHide = {this.hideModal}
            dialogClassName="book-moreinfo"
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">{this.stage.book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Author: </strong>{this.state.book.author}</p>
                <p><strong>Description:</strong></p>
                {this.stage.book.description}
                
            </Modal.Body>
            <Modal.Footer>
                <Button href={this.props.bookLink} target="_blank" bsStyle="success">View On Google Books</Button>
                <Button onClick={this.hideModal} bsStyle="danger">Close</Button>
            </Modal.Footer>
            
            </Modal>
            </ButtonToolbar>
      //       <Container fluid>
      //   <Row>
      //     <Col size="md-12">
      //       <Jumbotron>
      //         <h1>
      //           {this.state.book.title} by {this.state.book.author}
      //         </h1>
      //       </Jumbotron>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col size="md-10 md-offset-1">
      //       <article>
      //         <h1>Description</h1>
      //         <p>
      //           {this.state.book.description}
      //         </p>
      //       </article>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col size="md-2">
      //       <Link to="/">← Back to Authors</Link>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Detail;