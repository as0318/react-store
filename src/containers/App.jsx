import React from "react";
import RouterView from "router";
import { BrowserRouter as Router } from "react-router-dom";
import {connect} from 'react-redux';
import Header from "comp/layout/header";

import "common/css/style.css";

class App extends React.Component {
    render() {
        return (<div className="wraper">
            <Header></Header>
            <section className="content">
                <Router>
                    <RouterView/>
                </Router>
            </section>
        </div>)
    }
}

export default connect()(App);