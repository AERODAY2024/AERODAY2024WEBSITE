import { useNavigate, useParams } from "react-router-dom";
import { challenges } from "../../constants";
import ChallengeCard from "./components/ChallengeCard";
import "../../assets/styles/pages/blog.scss";
import { useEffect } from "react";
import { getRandomElement } from "../../utils";
import { images } from "../../assets/images";
import { PageTitle } from "../../components";

const Challenge = () => {
  const bgImage = getRandomElement(images);

  let { challengeName } = useParams();
  const currentChallenge = challenges[challengeName];
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentChallenge) {
      navigate("/");
    }
  }, [currentChallenge, navigate]);

  if (!currentChallenge) {
    return null;
  }

  return (
    <>
      <PageTitle
        page={"CHALLENGE"}
        title={currentChallenge.title}
        bgImage={bgImage}
      />
      <div className="mt-5 pt-5">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="block">
            <ChallengeCard challenges={currentChallenge} />
          </div>
        </div>
      </div>
    </>
  );
};

export { Challenge };
