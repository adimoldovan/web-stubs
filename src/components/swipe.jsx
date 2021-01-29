import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'
import {SwipeableList, SwipeableListItem} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import {FaThumbsDown, FaThumbsUp} from "react-icons/all";
import './swipe.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            right: 0,
        };
    }


    render() {
        return (
            <Container>
                <PageTitle page_title="Swipe"/>
                <div className="swipe-list-container">
                    <SwipeableList>
                        <Row>
                            <Col sm className="counter">{this.state.left}</Col>
                            <Col sm><SwipeableListItem
                                swipeLeft={{
                                    content: <div className="swipe-list-item-left"><FaThumbsDown
                                        className="swipe-list-content-icon"/></div>,
                                    action: () => this.setState({left: this.state.left + 1})
                                }}
                                swipeRight={{
                                    content: <div className="swipe-list-item-right"><FaThumbsUp
                                        className="swipe-list-content-icon"/></div>,
                                    action: () => this.setState({right: this.state.right + 1})
                                }}
                                onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
                            >
                                <div className="swipe-list-item">Swipe me left or right</div>
                            </SwipeableListItem></Col>
                            <Col sm className="counter">{this.state.right}</Col>

                        </Row>
                    </SwipeableList>
                </div>
            </Container>
        )
    }
}