import { useParams } from "react-router-dom";

const Axe = () => {
  let { axeName } = useParams();

  return (
    <div>
      <h1>Axe</h1>
      {axeName}
    </div>
  );
};

export default Axe;
