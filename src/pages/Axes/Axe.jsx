import { useParams } from "react-router-dom";
import { axes } from "../../constants";
import AxeCard from "./components/AxeCard";

const Axe = () => {
  let { axeName } = useParams();
  const currentAxe = axes[axeName];

  return (
    <div className="mt-5 pt-5">
      <AxeCard axe={currentAxe.name} />
    </div>
  );
};

export { Axe };
