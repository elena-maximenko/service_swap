import App from './component/App';

import './component/index.css';

import * as React from 'react';

import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// import {Route, Router, Switch} from "react-router";

// import createBrowserHistory from "history/createBrowserHistory";
import {BrowserRouter} from "react-router-dom";

/*import {Route, Router, } from "react-router";


import createBrowserHistory from "history/createBrowserHistory";*/

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    /*<Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/users/" component={App} />
        </Switch>
    </Router>,
    /*<App/>/*(
    <Router history={createBrowserHistory()}>
        <Route path="/">
            <Route path="welcome" component={App}/>
            <Route path="delete-user/${id}" component={App}/>
        </Route>
    </Router>)*/
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
