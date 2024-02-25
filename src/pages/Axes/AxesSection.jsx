import { axesArray } from "../../constants";
import AxeItem from "./components/AxeItem";

const renderedAxeCards = axesArray.map((axe) => {
  return <AxeItem key={axe.name} axe={axe} />;
});

const AxesSection = () => {
  return (
    <section className="news section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>
                Eventre <span className="alternate">News</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm tempor incididunt ut labore dolore
              </p>
            </div>
          </div>
        </div>
        <div className="row">{renderedAxeCards}</div>
      </div>
    </section>
  );
};
export { AxesSection };
