import { useParams } from "react-router-dom";

const Challenge = () => {
  let { challengeName } = useParams();

  return (
    <div>
      <h1>Challenge</h1>
      {challengeName}
    </div>
  );
};

export { Challenge };
