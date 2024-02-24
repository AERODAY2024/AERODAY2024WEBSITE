import speakers from "../constants/speakers.json";

const AboutComponent = () => {
  const person = speakers[0];
  return (
    <section className="section testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>What People <span className="alternate">Say?</span></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aliquid vero harum rerum voluptates, ab, ullam.</p>
            </div>
          </div>
        </div>
        <div className="row mt-20">
          <div className="col-lg-4 col-md-6">
            {/* Testimonial*/}
            <div className="testimonial-item">
              {/* Given Comment*/}
              <div className="comment">
                <p>{person.comment}</p>
              </div>
              <div className="person">
                <div className="media">
                  {/* Person Image*/}
                  <img src={person.image} alt="person-image" />
                  <div className="media-body">
                    {/* Person Name*/}
                    <div className="name"><p>{person.name}</p></div>
                    {/* Profession*/}
                    <div className="profession"><p>{person.role}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            {/* Testimonial*/}
            <div className="testimonial-item">
              {/* Given Comme*/}nt
              <div className="comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita.</p>
              </div>
              <div className="person">
                <div className="media">
                  {/* Person Imag*/}e
                  <img src="images/speakers/speaker-thumb-one.jpg" alt="person-image" />
                  <div className="media-body">
                    {/* Person Name*/}
                    <div className="name"><p>Kaite Stricker</p></div>
                    {/* Profession */}-
                    <div className="profession"><p>Designer</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto">
            {/* -- Testimonial*/}
            <div className="testimonial-item">
              {/*  Given Comment*/}
              <div className="comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita.</p>
              </div>
              <div className="person">
                <div className="media">
                  {/* Person Image*/}
                  <img src="images/speakers/speaker-thumb-five.jpg" alt="person-image" />
                  <div className="media-body">
                    {/*Person Name*/}
                    <div className="name"><p>Adam Smith</p></div>
                    {/* Profession*/}
                    <div className="profession"><p>Web Developer</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default AboutComponent;
