import Modal from "../components/Modal"
import {useState} from 'react';
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>Zakryt'</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Kakoj-to tekst</p>
        </Modal>
    );

    return(
        <div>
            <Button onClick={handleClick} primary>Otkryt'</Button>{showModal && modal}
        </div>
    );
}

export default ModalPage;
