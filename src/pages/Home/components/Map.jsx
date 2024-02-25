import "../../../assets/styles/components/map.scss";
const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7zvp0cY0_RIRQ1MoP3PEU0E&key=AIzaSyDHx4xH3yZk9viYNf1jxiBS42Ewp7XCTns"
        height="590"
        style={{ border: 0 }}
        allowfullscreen=""
      ></iframe>
      <div className="map-contact-detalis">
        <div className="open-time">
          <h5>Jour:</h5>
          <ul>
            <li>
              Weekday: <span>08:30 - 17:00</span>
            </li>
            <li>
              Saturday: <span>08:00 - 13:00</span>
            </li>
          </ul>
        </div>
        <div className="map-contact-form">
          <button
            type="button"
            className="btn btn-main-md mx-auto col-md-5 w-auto"
          >
            Contactez nous
          </button>
        </div>
      </div>
    </div>
  );
};

export { Map };
