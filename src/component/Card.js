import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((user) => user._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleCardLike() {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="element">
      <img
        className="element__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="element__discription">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleCardLike}
          ></button>

          <span className="element__like-number">
            {props.card.likes.length}
          </span>
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
