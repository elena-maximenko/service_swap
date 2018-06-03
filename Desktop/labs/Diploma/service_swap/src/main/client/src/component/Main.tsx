import * as React from 'react';

import {Component} from 'react';

import {Route, Switch} from 'react-router-dom'

import CategoryComponent from "./CategoryComponent";
import ServiceComponent from "./ServiceComponent";
import UserComponent from "./UserComponent";

class Main extends Component {
    public render() {
        return (
            <main>
                <Switch>
                    <Route path='/category' component={CategoryComponent}/>
                    <Route path='/service' component={ServiceComponent}/>
                    <Route path='/user' component={UserComponent}/>
                </Switch>
            </main>
        )
    }
};

export default Main;