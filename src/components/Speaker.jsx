const Speaker = ({ speakerInfo }) => {
  const { links, image, name, role } = speakerInfo;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="speaker-item">
        <div className="image">
          <img src={image} alt="speaker" className="img-fluid" height="300px" />
          <div className="primary-overlay"></div>
          <div className="socials">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content text-center">
          <h5>
            <a href="single-speaker.html">{name}</a>
          </h5>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
