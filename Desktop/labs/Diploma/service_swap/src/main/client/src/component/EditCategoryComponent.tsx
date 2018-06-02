import {TextField} from 'material-ui';

import * as React from "react";

import {Button, Label, Modal} from "react-bootstrap";
import CategoryComponent from "./CategoryComponent";

class EditCategoryModal extends React.Component<any, /*{ value: string }*/any> {

    constructor(props: any) {
        super(props);
        this.edit = this.edit.bind(this);

        this.state = {
            categoryComponent: CategoryComponent,
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    public handleChange(event) {
        this.setState({value: event.target.value});
    }

    public edit(id:number) {
        const name = this.state.value;

        window.console.log(name);

        fetch('http://localhost:8080/edit-category/'+id+'/' + name, {
            headers: {
                'Accept': 'application/json, text/plain',
            },
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => (this.props.categoryComponent.setState({categories: data})));

        this.props.categoryComponent.componentDidMount();
    }

    public closePopup() {
        this.setState({
            isClosed: true
        });
    }

    public render() {
        if(this.state.isClosed){
        return null;
}
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Body>
                        <Label>New name </Label>

                <TextField value={this.state.value} onChange={this.handleChange}/>
        </Modal.Body>

        <Modal.Footer>
        <Button bsStyle="primary" onClick={this.edit.bind(this, this.props.id)}>OK</Button>
        <Button onClick={this.closePopup}>
        Close
        </Button>
        </Modal.Footer>
        </Modal.Dialog>
        </div>
    );
    }
}

export default EditCategoryModal;