import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';

export default class PageDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: props.page_description
        };
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <small className="text-muted">{this.state.desc}</small>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
