import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'

export default class Stale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.staleBtn = this.createButton();
    }

    createButton() {
        return React.createElement('button', {
            id: "stale-button",
            className: "btn btn-info",
            type: "button",
            name: "button_" + this.state.count,
            ref: React.createRef(),
            onClick: () => {
                this.handleClick();
            }
        }, this.state.count + " clicks")
    }

    handleClick() {
        let count = this.state.count;
        this.setState({count: ++count});
        this.staleBtn = this.createButton();
        this.forceUpdate();
        this.render();
    }

    render() {
        return (
            <Container>
                <PageTitle page_title="Stale element (work in progress)"/>
                <div id="stale-container" className="text-center">
                    {this.staleBtn}
                </div>
            </Container>
        )
    }
}