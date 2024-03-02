import { useNavigate, useParams } from "react-router-dom";
import { axes } from "../../constants";
import AxeCard from "./components/AxeCard";
import "../../assets/styles/pages/blog.scss";
import { useEffect } from "react";
import { PageTitle } from "../../components";
import { getRandomElement } from "../../utils";
import { images } from "../../assets/images";

const Axe = () => {
  const bgImage = getRandomElement(images);

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
    <>
      <PageTitle title={currentAxe.name} bgImage={bgImage} />
      <div className="mt-5 pt-5">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="block">
            <AxeCard axe={currentAxe} />
          </div>
        </div>
      </div>
    </>
  );
};

export { Axe };
