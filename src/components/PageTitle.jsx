import "../assets/styles/components/page-title.scss";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title, bgImage }) => {
  return (
    <section
      style={{ background: `url(${bgImage}) no-repeat` }}
      className="page-title bg-title overlay-lighter"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="title">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PageTitle };
