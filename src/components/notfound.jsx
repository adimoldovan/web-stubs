import React from 'react'
import PageTitle from './page-title';
import { Container } from 'react-bootstrap';

export default class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle page_title="Whoops! Content not found!" />
      </Container>
    )
  }
}
