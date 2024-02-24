import { useNavigate, useParams } from "react-router-dom";
import { challenges } from "../../constants";
import ChallengeCard from "./components/ChallengeCard";
import "../../assets/styles/pages/blog.scss"
import { useEffect } from "react";


const Challenge = () => {
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
    <div className="mt-5 pt-5">
      <div className="col-lg-8 col-md-10 mx-auto">
        <div className="block">
          <ChallengeCard challenges={currentChallenge} />
        </div>
      </div>
    </div>
  );
};

export { Challenge };
