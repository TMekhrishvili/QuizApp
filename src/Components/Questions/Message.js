import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'

const Message = ({ sc, tog }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!tog);

    return (
        <div>
            <Modal isOpen={tog} toggle={toggle}>
                <ModalHeader toggle={toggle}>Quiz Over!</ModalHeader>
                <ModalBody>
                    Your Score: {sc}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Ok</Link>
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Message;