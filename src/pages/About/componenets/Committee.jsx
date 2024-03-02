import "../../../assets/styles/pages/speaker.scss";
import { committee } from "../../../constants";
import { Member } from "./Member";
const Committee = () => {
  return (
    <section className="section speakers bg-speaker overlay-lighter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title white">
              <h3>NOTRE EQUIPE</h3>
              <p>Rencontrer les gens dans les coulisses.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row d-flex justify-content-center">
            {committee.slice(0, 3).map((member, i) => {
              return <Member key={i} member={member} />;
            })}
          </div>
        </div>
        <div className="row">
          {committee.slice(3).map((member, i) => {
            return <Member key={i} member={member} />;
          })}
        </div>
      </div>
    </section>
  );
};

export { Committee };
