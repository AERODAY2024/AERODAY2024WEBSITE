import testimonials from "../constants/testimonials.json";
import speakers from "../constants/speakers.json";

import Testimonial from "./Testimonial";
import Speaker from "./Speaker";

const AboutUSComponent = () => {
  return (
    <>
      <section className="section speakers bg-speaker overlay-lighter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title*/}
              <div className="section-title white">
                <h3>
                  Who <span className="alternate">Speaking?</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusm tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {speakers.map((speakerInfo) => (
              <Speaker speakerInfo={speakerInfo} />
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>
                  What People <span className="alternate">Say?</span>
                </h3>
                <p>title</p>
              </div>
            </div>
          </div>
          <div className="row mt-20">
            {testimonials.map((testimonial) => (
              <Testimonial data={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUSComponent;
