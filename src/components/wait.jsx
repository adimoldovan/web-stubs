import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PageTitle from './page-title'

export default class Wait extends Component {


  render() {
    return (
      <div>
        <PageTitle page_title="Wait" />
        <Container>
          <Row>
            <Col className="text-center">
              <Button variant="danger" className="alert-button" id="answer-trigger" onClick={this.showAlert}>Give me the Answer to the Ultimate Question of Life, the Universe, and Everything</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}