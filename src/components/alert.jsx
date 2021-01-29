import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PageTitle from './page-title'

export default class Alert extends Component {

  showAlert() {
    window.alert('Hello! I am an Javascript alert!\nYou cannot interact with the page unless you dismiss me');
  }

  showConfirm() {
    window.confirm('Hello! I am an Javascript confirmation dialog!\nYou cannot interact with the page unless you dismiss me');
  }

  showPrompt() {
    window.prompt('Hello! I am an Javascript prompt dialog!\nYou cannot interact with the page unless you dismiss me');
  }

  render() {
    return (
      <div>
        <PageTitle page_title="Alert" />
        <Container>
          <Row>
            <Col className="text-center">
              <Button variant="info" className="alert-button" id="alert-trigger" onClick={this.showAlert}>Open alert</Button>
              <Button variant="info" className="alert-button" id="confirm-trigger" onClick={this.showConfirm}>Open confirmation dialog</Button>
              <Button variant="info" className="alert-button" id="prompt-trigger" onClick={this.showPrompt}>Open prompt dialog</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}