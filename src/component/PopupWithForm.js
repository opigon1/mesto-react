function PopupWithForm({
  name,
  isOpen,
  type,
  title,
  onSubmit,
  children,
  buttonName,
  onClose,
}) {
  return (
    <div
      className={`popup popup_type_${name}` + (isOpen ? " popup_opened" : "")}
    >
      <div className={`popup__container ${type}`}>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          action="#"
          name={`form_type_${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button className="popup__submit" type="submit">
            {buttonName}
          </button>
        </form>
        <button
          className="popup__closed"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export { PopupWithForm };
