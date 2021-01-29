import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import PageTitle from './page-title'

export default class Wait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theAnswer: "",
        };
    }

    calculateTheAnswer = () => {
        this.setState({theAnswer: "Calculating..."})
        let aWhile = Math.floor(Math.random() * 9000) + 3000;
        setTimeout(this.showAnswer, aWhile)
    }

    showAnswer = () => {
        this.setState({theAnswer: "42"})
    }

    render() {
        return (
            <div>
                <PageTitle page_title="Wait"/>
                <Container>
                    <Row className="text-center the-answer">
                        <Col className="text-center">
                            {this.state.theAnswer}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button variant="danger" className="alert-button" id="answer-trigger"
                                    onClick={this.calculateTheAnswer}>Give me the Answer to the Ultimate Question of
                                Life, the
                                Universe, and Everything</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}