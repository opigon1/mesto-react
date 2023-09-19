import React from "react";
import { PopupWithForm } from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      type="popup__container_type_avatar"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="avatar">
        <input
          className="popup__input popup__input_type_name"
          name="avatar"
          type="url"
          id="avatar"
          placeholder="Введите URL"
          required
          minLength="2"
          ref={avatarRef}
        />
        <span className="popup__input-error" id="avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export { EditAvatarPopup };
