import { axesArray } from "../../constants";
import { AxeItem } from "./components/AxeItem";
const AxesSection = () => {
  return (
    <section className="news section" id="axes-pannel">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>
                Nos <span className="alternate">Axes</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm tempor incididunt ut labore dolore
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {axesArray.map((axe) => {
            return <AxeItem key={axe.name} axe={axe} />;
          })}
        </div>
      </div>
    </section>
  );
};
export { AxesSection };
