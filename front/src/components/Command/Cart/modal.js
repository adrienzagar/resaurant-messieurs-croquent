import React from 'react'
import { Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import FormToSubmit from './form'

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
            <FormToSubmit
                email={email}
                phone_number={phone_number}
                firstname={firstname}
                lastname={lastname}
                comment={comment}
                setMailValue={setMailValue}
                setPhoneValue={setPhoneValue}
                setNameValue={setNameValue}
                setLastnameValue={setLastnameValue}
                setCommentValue={setCommentValue}
                sendOrder={sendOrder}
                setUserObject={setUserObject}
            />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalCart;