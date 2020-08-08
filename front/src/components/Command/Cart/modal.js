import React from 'react'
import { Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ModalCart = ({
    email, 
    phone_number,
    firstname,
    lastname,
    comment,
    setMailValue,
    setPhoneValue,
    setNameValue,
    setLastnameValue,
    setCommentValue,
    sendOrder,
    setUserObject,
}) => {
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
  const handleOnCommentChange = (event) => {
      setCommentValue(event.target.value)
  }
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
      classeName="modal"
    >
      <Modal.Header className="modal__title">Veuillez remplir le formulaire ci-dessous pour valider votre commande</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="modal__container">
                <i class="fas fa-user"></i>
                <input className="modal__input" id="lastname" type="text" placeholder="Nom" value={lastname} onChange={handleOnLastnameChange}/>
              </div>
              <div className="modal__container">
                <i class="fas fa-user"></i>
                <input className="modal__input" id="name" type="text" placeholder="Prénom" value={firstname} onChange={handleOnNameChange} />
              </div>
              <div className="modal__container">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input className="modal__input" id="email" type="email" placeholder="Email" value={email} onChange={handleOnMailChange} />
              </div>
              <div className="modal__container">
                <i className="fas fa-phone-alt"></i>
                <input className="modal__input" id="phone" type="tel" placeholder="Téléphone" value={phone_number} onChange={handleOnPhoneChange} />
              </div>
              <div className="modal__container">
                <i class="fas fa-comment"></i>
                <textarea className="modal__input" id="comment" type="text" placeholder="Commentaire" value={comment} onChange={handleOnCommentChange} />
              </div>
              <button className="modal__submit"  type="submit">Valider</button>
            </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalCart;