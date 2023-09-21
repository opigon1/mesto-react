import React from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="name">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          type="text"
          id="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          onChange={handleChangeName}
          value={name ?? ""}
        />
        <span className="popup__input-error" id="name-error"></span>
      </label>
      <label className="popup__label" htmlFor="about">
        <input
          className="popup__input popup__input_type_status"
          name="about"
          type="text"
          id="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          onChange={handleChangeDescription}
          value={description ?? ""}
        />
        <span className="popup__input-error" id="about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export { EditProfilePopup };
