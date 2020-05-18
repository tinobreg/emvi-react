import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

/** Layouts **/
import CommonLayoutRoute from "./layout/commonLayoutComponent";
import HomeLayoutRoute from "./layout/homeLayoutComponent";
/** Components **/
import Home from './views/home';
import Login from './views/login';
import AboutUs from './views/aboutus';
import JoinUs from './views/joinus';

/*
   App
 */
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <HomeLayoutRoute path="/home" component={Home} />
                    <HomeLayoutRoute exact path="/" component={Home} />
                    <CommonLayoutRoute path="/nosotros" component={AboutUs} />
                    <CommonLayoutRoute path="/quiero-ser-cliente" component={JoinUs} />
                    <CommonLayoutRoute path="/ingresar" component={Login}/>
                </Switch>
            </Router>
        );
    }
}

export default App;