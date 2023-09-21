function ImagePopup({ isOpen, onClose, card }) {
  return (
    <div className={`popup popup_type_img` + (isOpen ? " popup_opened" : "")}>
      <div className="popup__container-image">
        <button
          className="popup__closed"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup__image-container">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__text">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export { ImagePopup };
