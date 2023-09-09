import React from "react";
import { api } from "../utils/Api";
import { Card } from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescriprion] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescriprion(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err))

    api.getCards()
      .then((res) => {
        setCards(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="main">
        <section className="profile">
          <div className="profile__avatar-cover" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__status">{userDescription}</p>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace }></button>
        </section>
        <section className="elements-section">

          <ul className="elements">
            {cards.map(card => (
              <Card card={card} onCardClick={props.onCardClick} key={card._id}/>
            ))}
          </ul>
          
        </section>
      </main>
  )
}

export { Main }