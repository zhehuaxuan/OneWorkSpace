import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './views/nav';
import Home from './views/content';
import getRouter from './router';
import 'antd/dist/antd.css';
import { Layout } from 'antd';


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Nav />
                <Home />
            </Layout>
        )
    }
}




export default App;