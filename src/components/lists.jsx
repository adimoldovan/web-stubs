import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from './page-title'

export default class Lists extends Component {
    render() {
        return (
          <Container>
            <PageTitle page_title="Lists" />
          </Container>
        )
      }
}