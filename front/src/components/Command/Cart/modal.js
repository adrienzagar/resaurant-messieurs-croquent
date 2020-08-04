import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function ModalExampleModal({ 
    email, 
    phone_number,
    firstname,
    lastname,
    setMailValue,
    setPhoneValue,
    setNameValue,
    setLastnameValue,
    sendOrder,
    setUserObject,
    setProductObject
}) {
  const [open, setOpen] = React.useState(false)
  
  const handleOnLastnameChange  = (event) => {
      setLastnameValue(event.target.value)
  }
  const handleOnNameChange  = (event) => {
      setNameValue(event.target.value)
  }
  const handleOnMailChange = (event) => {
      setMailValue(event.target.value)
  }
  const handleOnPhoneChange  = (event) => {
      setPhoneValue(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      // setProductObject(product, quantity)
      setUserObject(lastname, firstname, phone_number, email)
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
                <div className="form__container">
                  <label htmlFor="lastname">Nom</label>
                  <input id="lastname" type="text" value={lastname} onChange={handleOnLastnameChange}/>
                </div>
                <div className="form__container">
                  <label htmlFor="name">Prénom</label>
                  <input id="Name" type="text" value={firstname} onChange={handleOnNameChange} />
                </div>
                <div className="form__container">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={email} onChange={handleOnMailChange} />
                </div>
                <div className="form__container">
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" type="tel" value={phone_number} onChange={handleOnPhoneChange} />
                </div>
                <button type="submit">CROQUER</button>
            </form>
        </Modal.Description>
      </Modal.Content>
      {/* <Modal.Actions>
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
      </Modal.Actions> */}
    </Modal>
  )
}

export default ModalExampleModal