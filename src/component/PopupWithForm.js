function PopupWithForm(props) {
  return (
    <div
      className={
        `popup popup_type_${props.name}` + (props.isOpen && " popup_opened")
      }
    >
      <div className={`popup__container ${props.type}`}>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          action="#"
          name={`form_type_${props.name}`}
          noValidate
        >
          {props.children}
          <button className="popup__submit" type="submit">
            {props.buttonName}
          </button>
        </form>
        <button
          className="popup__closed"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export { PopupWithForm };
