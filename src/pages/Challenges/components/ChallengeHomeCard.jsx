import "../../../assets/styles/pages/blog.scss"

const ChallengeHomeCard = ({ challenge }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
      <div className="blog-post">
        <div className="post-thumb">
          <a href="news-single.html">
            <img
              src={challenge.image}
              alt="post-image"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="post-content">
          <div className="date">
            <h4>
              20<span>May</span>
            </h4>
          </div>
          <div className="post-title">
            <h2>
              <a href="news-single.html">{challenge.name}</a>
            </h2>
          </div>
          <div className="post-meta">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-user-o"></i>
                <a href="#">Admin</a>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-heart-o"></i>
                <a href="#">350</a>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-comments-o"></i>
                <a href="#">30</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeHomeCard;