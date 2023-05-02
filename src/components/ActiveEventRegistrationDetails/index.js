const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const yetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegister"
      />
      <p className="textCSS">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="registerBtn" type="button">
        Register Here
      </button>
    </>
  )
  const registered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="okayImage"
      />
      <h1 className="registeredText">
        You have already registered
        <br /> for the event
      </h1>
    </>
  )

  const registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closedImage"
      />
      <h1 className="registeredText">Registrations Are Closed Now!</h1>
      <p className="textCSS">Stay tuned. We will reopen</p>
    </>
  )

  const getEventStatus = () => {
    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return yetToRegister()
      case 'REGISTERED':
        return registered()
      case 'REGISTRATIONS_CLOSED':
        return registrationClosed()
      default:
        return (
          <p className="registrationStatus">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return getEventStatus()
}

export default ActiveEventRegistrationDetails
