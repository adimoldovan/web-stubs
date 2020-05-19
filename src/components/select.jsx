import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from './page-title'

export default class Select extends Component {
    render() {
        return (
          <Container>
            <PageTitle page_title="Select" />
          </Container>
        )
      }
}