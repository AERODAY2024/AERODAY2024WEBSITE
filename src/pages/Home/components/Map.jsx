import "../../../assets/styles/components/map.scss";
const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7zvp0cY0_RIRQ1MoP3PEU0E&key=AIzaSyDHx4xH3yZk9viYNf1jxiBS42Ewp7XCTns"
        height="500"
        // width="100%"
        style={{ border: 0 }}
        allowfullscreen=""
      ></iframe>
    </div>
  );
};

export { Map };
