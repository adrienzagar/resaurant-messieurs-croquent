import React from 'react'
import { Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ValidationForm from './validationForm'

const ModalCart = ({
    sendOrder,
}) => {
  const [open, setOpen] = React.useState(false)
  
  const handleSubmit = (event) => {
      event.preventDefault();
      sendOrder();
  }
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="cart__submit">CROQUER</button>}
    >
      <Modal.Header>Pour valider votre commande, veuillez remplir le formualaire</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <form className="form" onSubmit={handleSubmit}>
              <ValidationForm />
            </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalCart;