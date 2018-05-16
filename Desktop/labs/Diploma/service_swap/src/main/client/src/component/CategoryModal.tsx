import {TextField} from 'material-ui';

import * as React from "react";

import {Button, Label, Modal} from "react-bootstrap";


class CategoryModal extends React.Component<any> {

  /*  constructor(props: any) {
        super(props);

        this.state = {isOpen: false};
    }

   /* public closePopup ()  {
        this.setState({
            isOpen: false
        });
    }*/

    public render() {
        window.console.log('fghbjk,.');
        return (
           <div className="static-modal">
                <Modal.Dialog>

                    <Modal.Body>
                                            <Label>Name </Label>

                                                <TextField id={"categoryName"}/>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary">OK</Button>
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