import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';

export default class PageTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.page_title
        };
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <small className="text-muted">{this.state.title}</small>
                        </h1>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
