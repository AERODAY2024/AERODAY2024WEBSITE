import "../styles/pages/home.scss";
const Home = () => {
  return (
    <section className="banner bg-banner-one overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="block">
              <div className="timer"></div>
              <h1>Business</h1>
              <h2>Conference 2017</h2>
              <h6>02-05 July 2017 California</h6>
              <a href="contact.html" className="btn btn-white-md">
                get ticket now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
