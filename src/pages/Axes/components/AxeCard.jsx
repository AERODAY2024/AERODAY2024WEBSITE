import { Member } from "../../About/componenets/Member";

const AxeCard = ({ axe }) => {
  return (
    <>
      <article className="blog-post single">
        <div className="post-thumb">
          <img src={axe.image} alt="post-image" className="img-fluid" />
        </div>
        <div className="post-content">
          <div className="date">
            <h4>
              21<span>May</span>
            </h4>
          </div>
          <div className="post-title">
            <h3>{axe.name}</h3>
          </div>
          <div className="post-meta"></div>
          <div className="post-details">
            <p>{axe.description}</p>
          </div>
        </div>
      </article>
      <section className="trainer-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Le responsable</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6  col-sm-8">
              {<Member member={axe.manager} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AxeCard;
