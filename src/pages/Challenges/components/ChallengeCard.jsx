import { Member } from "../../About/componenets/Member";

const ChallengeCard = ({ challenge }) => {
  return (
    <>
      <article className="blog-post single">
        <div className="post-thumb wide-img">
          <img
            src={challenge.image}
            alt="post-image"
            className="img-fluid w-100"
          />
        </div>
        <div className="post-content">
          {challenge.date && (
            <div className="date">
              <h4>
                {challenge.date.day}
                <span>{challenge.date.month}</span>
              </h4>
            </div>
          )}
          <div className="post-title">
            <h3>
              <span className="alternate">{challenge.name}</span>
            </h3>
          </div>
          <div className="post-meta"></div>
          <div className="post-details">
            <div className="row container d-flex justify-content-between g-4">
              <p
                dangerouslySetInnerHTML={{ __html: challenge.description }}
              ></p>
              {challenge.cdc && (
                <button
                  className="btn-transparent-md"
                  onClick={() => window.open(challenge.cdc, "_blank")}
                >
                  Consulter le cahier des charges
                </button>
              )}
              {challenge.form && (
                <button
                  className="btn-transparent-md"
                  onClick={() => window.open(challenge.form, "_blank")}
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
              {<Member member={challenge.manager} icnludeContacts={true} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ChallengeCard;
