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
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 w-100">
            <Member member={committee[0]} />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {committee.slice(1, 3).map((member, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                <Member member={member} />
              </div>
            );
          })}
        </div>
        <div className="row">
          {committee.slice(3).map((member, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                <Member member={member} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Committee };
