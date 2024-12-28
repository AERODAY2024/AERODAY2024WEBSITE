import { Member } from "../../About/componenets/Member";

const AxeCard = ({ axe }) => {
  return (
    <>
      <article className="blog-post single">
        <div className="post-thumb">
          <img src={axe.image} alt="post-image" className="img-fluid w-100" />
        </div>
        <div className="post-content">
          {axe.date && (
            <div className="date">
              <h4>
                {axe.date.day}
                <span>{axe.date.month}</span>
              </h4>
            </div>
          )}
          <div className="post-title">
            <h3>
              <span className="alternate">{axe.name}</span>
            </h3>
          </div>
          <div className="post-meta"></div>
          <div className="post-details">
            {/* <p>{axe.description}</p> */}
            <p dangerouslySetInnerHTML={{ __html: axe.description }}></p>
            <div className="row d-flex justify-content-between">
              {axe.cdc && (
                <button
                  className="btn-transparent-md"
                  onClick={() => window.open(axe.cdc, "_blank")}
                >
                  Consulter le cahier des charges
                </button>
              )}
              {axe.form && (
                <button
                  className="btn-transparent-md"
                  onClick={() => window.open(axe.form, "_blank")}
                >
                  Remplissez le formulaire ici
                </button>
              )}
            </div>
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
              {<Member member={axe.manager} icnludeContacts={true} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AxeCard;
