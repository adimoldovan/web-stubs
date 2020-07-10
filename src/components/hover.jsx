import React, {Component} from 'react';
import {Button, Container} from 'react-bootstrap';
import PageTitle from './page-title'
import './hover.css'

export default class Hover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: "",
        };
    }

    clicked = (e) => {
        this.setState({action: `You last clicked the ${e.target.name}`});
    }

    render() {
        const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

        return (
            <Container>
                <PageTitle page_title="Hover"/>
                <Container className="container-table text-center">
                    <p id="result">{this.state.action}</p>
                    <div className="dropdown">
                        <Button variant="outline-info">Hover me</Button>
                        <div className="dropdown-content">
                            {animals.map((animal, index) => (
                                <a key={index} className="clickable" name={animal} onClick={this.clicked}>{animal}</a>
                            ))}
                        </div>
                    </div>
                </Container>
            </Container>
        )
    }
}