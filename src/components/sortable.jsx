import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from './page-title'

export default class Sortable extends Component {
    render() {
        return (
          <Container>
            <PageTitle page_title="Sortable" />
              Coming soon in browsers all over the world
          </Container>
        )
      }
}