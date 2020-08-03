import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

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

            <form className="form" action="">
                <div className="form__container">
                  <label htmlFor="lastname">Nom</label>
                  <input id="lastname" type="text" />
                </div>
                <div className="form__container">
                  <label htmlFor="name">Prénom</label>
                  <input id="Name" type="text" />
                </div>
                <div className="form__container">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" />
                </div>
                <div className="form__container">
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" type="tel" />
                </div>
            </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Retour
        </Button>
        <Button
          content="Valider la commande"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          color='black'
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal