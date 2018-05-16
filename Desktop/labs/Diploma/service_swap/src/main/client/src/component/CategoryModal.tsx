// import {TextField} from 'material-ui';

import * as React from "react";

// import {Button, Col, FormGroup, Label, Modal, Row} from "react-bootstrap";


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
            <div>
                GFhk!
            </div>
           /* <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header/>

                    <Modal.Body>
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Name </Label>
                                            <Col>
                                                <TextField id={"categoryName"}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary">OK</Button>
                        <Button onClick={this.props.closePopup}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>*/
        );
    }

}

export default CategoryModal;