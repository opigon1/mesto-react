import React from "react";
import { Card } from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-cover" onClick={onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Аватарка"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__status">{currentUser.about}</p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements-section">
        <ul className="elements">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card._id}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export { Main };
