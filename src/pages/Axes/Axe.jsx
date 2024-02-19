import { useParams } from "react-router-dom";
import { axes } from "../../constants";
import AxeCard from "./components/AxeCard";

const Axe = () => {
  let { axeName } = useParams();
  const currentAxe = axes[axeName];

  return (
    <div className="mt-5 pt-5">
      <h1>{currentAxe.name}</h1>
      <AxeCard axe={currentAxe} />
    </div>
  );
};

export { Axe };
