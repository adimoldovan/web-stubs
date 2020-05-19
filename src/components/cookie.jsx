import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PageTitle from './page-title';

export default class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = { cvalue: "" };
    this.cname = "gibberish";
  }

  randomString = () => {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz 0123456789";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  setCookie = (cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var v = this.cname + "=" + cvalue + "; " + expires
    console.log("Setting cookie " + v)
    document.cookie = v;

    this.setState({
      cvalue: this.getCookieValue()
    })
  }

  getCookieValue = () => {
    var name = this.cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  update(setCookie) {
    if (setCookie) {
      this.setCookie(this.randomString(), 5)
    } else {
      this.setCookie("", -1)
    }
  }

  render() {
    return (
      <Container>
        <PageTitle page_title="The gibberish talking cookie" />
        <Container>
          <Row>
            <Col className="text-center">
              <div>
                <Button variant="success" className="alert-button" id="set-cookie" onClick={() => this.update(true)}>Set the cookie</Button>
                <Button variant="danger" className="alert-button" id="delete-cookie" onClick={() => this.update(false)}>Remove the cookie</Button>
              </div>
              <div>
                <h1 id="cookie-value">{this.state.cvalue}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}