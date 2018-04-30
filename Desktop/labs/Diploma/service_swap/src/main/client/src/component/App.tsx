import * as React from "react";
import {Component} from "react";

import Header from "./Header";
import Main from "./Main";

class App extends Component {
    public render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
};

export default App;