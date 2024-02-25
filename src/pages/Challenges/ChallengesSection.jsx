import { challengesArray } from "../../constants";
import { ChallengeHomeCard } from "./components";

const ChallengesSection = () => {
  return (
    <section className="news section">
      <div className="row intro-title">
        <div className="col-12">
          <div className="section-title">
            <h3>
              Nos <span className="alternate">Challenges</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusm tempor incididunt ut labore dolore
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {challengesArray.map((challenge) => {
            return (
              <ChallengeHomeCard challenge={challenge} key={challenge.name} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ChallengesSection };
