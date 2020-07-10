import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import PageTitle from './page-title';

export default class Cookie extends Component {
    constructor(props) {
        super(props);
        this.state = {cookieValue: ""};
        this.cname = "gibberish";
    }

    randomString = () => {
        let text = "";
        const possible = "abcdefghijklmnopqrstuvwxyz 0123456789";

        for (let i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    setCookie = (cookieValue, expirationDays) => {
        let d = new Date();
        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        let v = this.cname + "=" + cookieValue + "; " + expires;
        console.log("Setting cookie " + v)
        document.cookie = v;

        this.setState({
            cookieValue: this.getCookieValue()
        })
    }

    getCookieValue = () => {
        let name = this.cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
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
                <PageTitle page_title="The gibberish talking cookie"/>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <div>
                                <Button variant="success" className="alert-button" id="set-cookie"
                                        onClick={() => this.update(true)}>Set the cookie</Button>
                                <Button variant="danger" className="alert-button" id="delete-cookie"
                                        onClick={() => this.update(false)}>Remove the cookie</Button>
                            </div>
                            <div>
                                <h1 id="cookie-value">{this.state.cookieValue}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}