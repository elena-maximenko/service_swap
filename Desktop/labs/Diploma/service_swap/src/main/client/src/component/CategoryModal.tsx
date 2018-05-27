import {TextField} from 'material-ui';

import * as React from "react";

import {Button, Label, Modal} from "react-bootstrap";

class CategoryModal extends React.Component<any, { value: string }> {

    constructor(props: any) {
        super(props);
        this.create = this.create.bind(this);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event) {
        this.setState({value: event.target.value});
    }

    public create(){
        window.console.log(this.state.value);
    }

   /* public closePopup ()  {
        this.setState({
            isOpen: false
        });
    }*/

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