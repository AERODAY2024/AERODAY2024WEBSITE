import { useParams } from "react-router-dom";
import { challenges } from "../../constants";

const Challenge = () => {
  let { challengeName } = useParams();
  const currentChallenge = challenges[challengeName];

  return (
    <div>
      <h1>Challenge</h1>
      {currentChallenge.name}
    </div>
  );
};

export { Challenge };
