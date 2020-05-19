import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SideNav from './components/side-nav'
import Home from './components/home'
import Auth from './components/auth'
import Notfound from './components/notfound'
import Cookie from './components/cookie'
import Alert from './components/alert'
import Hover from './components/hover'
import Lists from './components/lists'
import Select from './components/select'
import Slider from './components/slider'
import Sortable from './components/sortable'
import Stale from './components/stale'
import Thieves from './components/thieves'
import Welcome from './components/welcome'
import Wait from './components/wait'

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        <SideNav />
        <div className="content">
          <HashRouter basename='/web-stubs'>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/auth'} component={Auth} />
              <Route path={'/cookie'} component={Cookie} />
              <Route path={'/alert'} component={Alert} />
              <Route path={'/hover'} component={Hover} />
              <Route path={'/lists'} component={Lists} />
              <Route path={'/select'} component={Select} />
              <Route path={'/slider'} component={Slider} />
              <Route path={'/sortable'} component={Sortable} />
              <Route path={'/stale'} component={Stale} />
              <Route path={'/thieves'} component={Thieves} />
              <Route path={'/welcome'} component={Welcome} />
              <Route path={'/wait'} component={Wait} />
              <Route component={Notfound} />
            </Switch>
          </HashRouter>
        </div>
      </Container>
    )
  }
}
