import React from "react";
import { PopupWithForm } from "./PopupWithForm";

function AddPlacePopup({ isOpen, onAddPlace, onClose }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonName="Добавить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="card-name">
        <input
          className="popup__input popup__input_type_card-name"
          name="title"
          type="text"
          id="title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error" id="title-error"></span>
      </label>
      <label className="popup__label" htmlFor="card-link">
        <input
          className="popup__input popup__input_type_link"
          name="link"
          type="url"
          id="link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__input-error" id="link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export { AddPlacePopup };
