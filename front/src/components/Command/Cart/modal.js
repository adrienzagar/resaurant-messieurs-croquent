//! == Import : npm ==
import React, {useState} from 'react';
import { Modal } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

//! == Import : local ==
import ValidationForm from './validationForm';
import 'semantic-ui-css/semantic.min.css';

//! == Composant ==
const ModalCart = ({ sendOrder }) => {
  const history = useHistory();

  const [open, setOpen] = useState(false)

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     history.push("/validation")
  //     sendOrder();
  // };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="cart__submit">CROQUER</button>}
      classeName="modal"
    >
      <Modal.Header className="modal__title">Veuillez remplir le formulaire ci-dessous pour valider votre commande</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            {/* <form className="form" onSubmit={handleSubmit}> */}
            <ValidationForm sendOrder={ sendOrder }/>
            {/* </form> */}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

//! == Export ==
export default ModalCart;