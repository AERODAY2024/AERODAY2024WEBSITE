import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const floatStyles = {
  position: "fixed",
  width: "60px",
  height: "60px",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#151515a9",
  color: "#FFF",
  borderRadius: "50px",
  textAlign: "center",
  cursor: "pointer",
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
const ScrollTop = () => {
  return (
    <div style={floatStyles} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faPlaneUp} style={{ marginTop: 15, height: 30 }} />
    </div>
  );
};

export { ScrollTop };
