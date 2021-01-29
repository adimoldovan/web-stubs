import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class ModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleClose = () => {
        this.setState({showModal: false})
    }
    handleOpen = () => {
        this.setState({showModal: true})
    }

    render() {
        return (
            <Container>
                <PageTitle page_title="Modal"/>
                <Container className="container-table text-center">
                    <Button variant="primary" onClick={this.handleOpen}>
                        Launch modal
                    </Button>
                </Container>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Click interceptor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>I'm stealing the click action for any element that's under me</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}