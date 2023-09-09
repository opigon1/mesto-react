function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className="element">
      <img className="element__img" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      <div className="element__discription">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-number">{props.card.likes.length}</span>
        </div>
        <button className="element__delete" type="button"></button>
      </div>
    </li>
  )
}

export { Card }