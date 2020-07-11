import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {HashRouter, Route, Switch} from 'react-router-dom';
import SideNav from './components/side-nav'
import Home from './components/home'
import Auth from './components/auth'
import Notfound from './components/notfound'
import Cookie from './components/cookie'
import Alert from './components/alert'
import Hover from './components/hover'
import Order from './components/order'
import Swipe from './components/swipe'
import Slider from './components/slider'
import Stale from './components/stale'
import Interceptor from './components/interceptor'
import Welcome from './components/welcome'
import Wait from './components/wait'
import ModalPopup from './components/modalPopup'

export default class App extends Component {
    render() {
        return (
            <Container fluid>
                <SideNav/>
                <div className="content">
                    <HashRouter basename='/web-stubs'>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/auth'} component={Auth}/>
                            <Route path={'/cookie'} component={Cookie}/>
                            <Route path={'/alert'} component={Alert}/>
                            <Route path={'/hover'} component={Hover}/>
                            <Route path={'/order'} component={Order}/>
                            <Route path={'/select'} component={Swipe}/>
                            <Route path={'/slider'} component={Slider}/>
                            <Route path={'/swipe'} component={Swipe}/>
                            <Route path={'/stale'} component={Stale}/>
                            <Route path={'/interceptor'} component={Interceptor}/>
                            <Route path={'/welcome'} component={Welcome}/>
                            <Route path={'/wait'} component={Wait}/>
                            <Route path={'/modal'} component={ModalPopup}/>
                            <Route component={Notfound}/>
                        </Switch>
                    </HashRouter>
                </div>
            </Container>
        )
    }
}
