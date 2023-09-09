function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img`  + (props.isOpen && ' popup_opened')}>
      <div className="popup__container-image">
        <button className="popup__closed" type="button" onClick={props.onClose}></button>
        <figure className="popup__image-container">
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__text">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export { ImagePopup }