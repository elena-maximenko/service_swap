import * as React from 'react';

import {Component} from 'react';

import {Route, Switch} from 'react-router-dom'

import CategoryComponent from "./CategoryComponent";
import UserComponent from "./UserComponent";

class Main extends Component {
    public render() {
        return (
            <main>
                <Switch>
                    <Route path='/category' component={CategoryComponent}/>
                    <Route path='/' component={UserComponent}/>
                </Switch>
            </main>
        )
    }
};

export default Main;