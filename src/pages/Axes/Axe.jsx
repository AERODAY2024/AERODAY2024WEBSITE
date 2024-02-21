import { useNavigate, useParams } from "react-router-dom";
import { axes } from "../../constants";
import AxeCard from "./components/AxeCard";
import { useEffect } from "react";

const Axe = () => {
  let { axeName } = useParams();
  const currentAxe = axes[axeName];

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAxe) {
      navigate("/");
    }
  }, [currentAxe, navigate]);

  if (!currentAxe) {
    return null;
  }

  return (
    <div className="mt-5 pt-5">
      <h1>{currentAxe.name}</h1>
      <AxeCard axe={currentAxe} />
    </div>
  );
};

export { Axe };
