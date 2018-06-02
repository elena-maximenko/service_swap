import {TextField} from 'material-ui';

import * as React from "react";

import {Button, Label, Modal} from "react-bootstrap";
import CategoryComponent from "./CategoryComponent";

class CategoryModal extends React.Component<any, /*{ value: string }*/any> {

    constructor(props: any) {
        super(props);
        this.create = this.create.bind(this);

        this.state = {
            categoryComponent: CategoryComponent,
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event) {
        this.setState({value: event.target.value});
    }

    public create() {
        const name = this.state.value;

        window.console.log(name);

        fetch('http://localhost:8080/create-category/' + name, {
            headers: {
                'Accept': 'application/json, text/plain',
            },
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => (this.props.categoryComponent.setState({categories: data})));

        this.props.categoryComponent.componentDidMount();

        this.props.closePopup();
    }

    public closePopup() {
        this.setState({
            isOpen: false
        });
    }

    public render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Body>
                        <Label>Name </Label>

                        <TextField value={this.state.value} onChange={this.handleChange}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.create}>OK</Button>
                        <Button onClick={this.props.closePopup}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default CategoryModal;