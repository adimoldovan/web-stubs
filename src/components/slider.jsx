import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 25,
        };
    }

    render() {
        return (
            <Container>
                <PageTitle page_title="Slider"/>
                <Form>
                    <Form.Group as={Row}>
                        <Col xs="9">
                            <RangeSlider
                                value={this.state.sliderValue}
                                onChange={e => this.setState({sliderValue: (Number(e.target.value))})}
                            />
                        </Col>
                        <Col xs="3">
                            <Form.Control value={this.state.sliderValue} onChange={e => this.setState({sliderValue: (Number(e.target.value))})}/>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}