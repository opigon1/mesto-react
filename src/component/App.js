import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer'
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <>
      <Header />
      <Main onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={(<>
        <label className="popup__label" htmlFor="name">
          <input className="popup__input popup__input_type_name" name="name" type="text" id="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error" id="name-error"></span>
        </label>
        <label className="popup__label" htmlFor="about">
          <input className="popup__input popup__input_type_status" name="about" type="text" id="about" placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="popup__input-error" id="about-error"></span>
        </label>
      </>   
      )}/>
      <PopupWithForm name="add" title="Новое место" buttonName="Добавить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={(
        <>
          <label className="popup__label" htmlFor="card-name">
            <input className="popup__input popup__input_type_card-name" name="title" type="text" id="title" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__input-error" id="title-error"></span>
         </label>
         <label className="popup__label" htmlFor="card-link">
            <input className="popup__input popup__input_type_link" name="link" type="url" id="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="link-error"></span>
        </label>
        </>
      )} />
      <PopupWithForm name="avatar" title="Обновить аватар" type="popup__container_type_avatar" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={(
          <label className="popup__label" htmlFor="avatar">
          <input className="popup__input popup__input_type_name" name="avatar" type="url" id="avatar" placeholder="Введите URL" required minLength="2" />
          <span className="popup__input-error" id="avatar-error"></span>
        </label>
        )}/>
      <PopupWithForm name="delete" title="Вы уверены" children="" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
    </>
  );
}

export default App;
