import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navmenu from './Navmenu';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navmenu />
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/about" component={ About } />
                        <Route path="/service" component={ Service } />
                        <Route path="/contact" component={ Contact}  />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;