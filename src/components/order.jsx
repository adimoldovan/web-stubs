import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import PageTitle from './page-title'
import ReactDragListView from 'react-drag-listview/lib/index.js';
import './order.css';
import {FaArrowsAlt} from "react-icons/all";

export default class Order extends Component {
    constructor(props) {
        super(props);
        const data = [];
        for (let i = 1, len = 21; i < len; i += 1) {
            data.push({
                title: `Item ${i}`
            });
        }
        this.state = {
            data
        };
    }

    render() {
        const that = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = [...that.state.data];
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({data});
            },
            nodeSelector: 'li',
            handleSelector: 'a'
        };

        return (
            <Container>
                <PageTitle page_title="Order"/>
                <div className="draggable-list">
                    <ReactDragListView {...dragProps}>
                        <ol>
                            {this.state.data.map((item, index) => (
                                <li key={index}>
                                    {item.title}
                                    <a id={`move-item-${index}`}><FaArrowsAlt/></a>
                                </li>
                            ))}
                        </ol>
                    </ReactDragListView>
                </div>
            </Container>
        )
    }
}