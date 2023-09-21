import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardDelete, onCardLike, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img
        className="element__img"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__discription">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleCardLike}
          ></button>

          <span className="element__like-number">{card.likes.length}</span>
        </div>
        {isOwner && (
          <button
            className="element__delete"
            type="button"
            onClick={handleCardDelete}
          ></button>
        )}
      </div>
    </li>
  );
}

export { Card };
