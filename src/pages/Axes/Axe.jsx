import { useNavigate, useParams } from "react-router-dom";
import { axes } from "../../constants";
import AxeCard from "./components/AxeCard";
import "../../assets/styles/pages/blog.scss"
import { useEffect } from "react";

const Axe = () => {
  const navigate = useNavigate();
  let { axeName } = useParams();
  const currentAxe = axes[axeName];


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
      <div className="col-lg-8 col-md-10 mx-auto">
				<div className="block">
          <AxeCard axe={currentAxe}/>
				</div>
			</div>
    </div>
  );
};

export { Axe };
