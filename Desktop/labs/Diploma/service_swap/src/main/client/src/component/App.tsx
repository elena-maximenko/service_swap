import * as React from "react";
import {Component} from "react";

import Header from "./Header";

import Main from "./Main";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
    public render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </MuiThemeProvider>
        )
    }
};

export default App;