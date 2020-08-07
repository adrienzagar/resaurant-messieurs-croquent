import React from 'react'
import { Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import UserField from './userField'

const ModalCart = ({
    email, 
    phone_number,
    firstname,
    lastname,
    comment,
    sendOrder,
    setUserObject,
    changeField
}) => {
  const [open, setOpen] = React.useState(false)
  
  const handleSubmit = (event) => {
      event.preventDefault();
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
                  <UserField
                    label="Nom"
                    id="firstname"
                    name="firstname"
                    type="text"
                    onChange={changeField}
                    value={lastname}
                  />
                </div>
                <div className="form__container">
                  <UserField
                      label="Prénom"
                      id="firstname"
                      name="firsname"
                      type="text"
                      onChange={changeField}
                      value={firstname}
                    />
                </div>
                <div className="form__container">
                  <UserField
                      label="Adresse email"
                      id="email"
                      name="email"
                      type="email"
                      onChange={changeField}
                      value={email}
                    />
                </div>
                <div className="form__container">
                  <UserField
                      label="Numéro de téléphone"
                      id="phone_number"
                      name="phone_number"
                      type="text"
                      onChange={changeField}
                      value={phone_number}
                    />
                </div>
                <div className="form__container">
                  <UserField
                      label="Commentaire"
                      id="comment"
                      name="comment"
                      type="text"
                      onChange={changeField}
                      value={comment}
                    />
                </div>
                  <button className="form__submit"  type="submit">Valider votre commande</button>
                
            </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalCart;