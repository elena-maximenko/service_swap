import * as React from 'react';

import {Component} from 'react';

import {Route, Switch} from 'react-router-dom'

import UserComponent from "./UserComponent";

class Main extends Component {
    public render() {
        return (
            <main>
                <Switch>
                    <Route path='/' component={UserComponent}/>
                    <Route path='/user/' component={UserComponent}/>
                </Switch>
            </main>
        )
    }
};

export default Main;