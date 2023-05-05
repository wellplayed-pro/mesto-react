import React from "react";

function ImagePopup({onClose, isOpen, card}) {

  return (
    <div className={`popup popup_type_image ${isOpen ? "popup_opened" : ""}`}>
     <figure className="popup__background">
      <button className="popup__button popup__button_act_exit" type="button" aria-label="Close" onClick={onClose}></button>
      <img className="popup__photo" alt={card.name} src={card.link} />
      <figcaption className="popup__caption">{card.name}</figcaption>
    </figure>
  </div>
  )
}

export default ImagePopup;