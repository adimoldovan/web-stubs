import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'
import $ from 'jquery'

export default class Stale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    stale = (e) => {
        this.setState({count: ++this.state.count})

        e.target.remove();
        $("#stale-container").html(e.target);

        if (this.state.count === 1) {
            $("#stale-button").text("Click me again. I dare you...");
        } else {
            $("#stale-button").text("Clicks: " + this.state.count);
        }
    }

    render() {
        return (
            <Container>
                <PageTitle page_title="Stale element (work in progress)"/>
                <div id="stale-container" className="text-center">
                    <button type="button" className="btn btn-info" id="stale-button" onClick={this.stale}>Click me. I
                        dare you...
                    </button>
                </div>
            </Container>
        )
    }
}