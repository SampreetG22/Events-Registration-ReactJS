import './index.css'

const EventItem = props => {
  const {details, eventBtnClicked} = props
  const {id, imageUrl, name, location, isActive} = details
  const BtnClick = () => {
    eventBtnClicked(id)
  }
  const borderClass = isActive ? 'highlighted' : 'normal'
  return (
    <li className="eventListItem">
      <button onClick={BtnClick} type="button" className="BtnClass">
        <img
          src={imageUrl}
          className={`${borderClass} imageAlter`}
          alt="event"
        />
      </button>
      <p className="nameCSS">{name}</p>
      <p className="locationCSS">{location}</p>
    </li>
  )
}

export default EventItem
