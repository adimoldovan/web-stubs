import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'
import './interceptor.css'

export default class Interceptor extends Component {
    render() {
        return (
            <Container>
                <PageTitle page_title="Click intercepted"/>
                <div className="interceptor-content">
                    <label>
                        <input type="checkbox" id="the_checkbox"/>
                        <span className="off">A checkbox waiting to be checked</span>
                    </label>
                </div>
            </Container>
        )
    }
}