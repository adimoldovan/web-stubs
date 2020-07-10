import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from './page-title'

export default class Stale extends Component {
    render() {
        return (
          <Container>
            <PageTitle page_title="Stale" />
              Coming soon in browsers all over the world
          </Container>
        )
      }
}