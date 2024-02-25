import { NavLink } from "react-router-dom";
import "../../../assets/styles/pages/blog.scss";
const AxeItem = ({ axe }) => {
  return (
    <div className="col-lg-6 col-sm-8 col-10 m-auto">
      <NavLink to={`${axe.url}`}>
        <div className="blog-post">
          <div className="post-thumb">
            <a href="news-single.html">
              <img src={axe.image} alt="post-image" className="img-fluid" />
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
                <a href="news-single.html">{axe.name}</a>
              </h2>
            </div>
            <div className="post-meta">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fa fa-user-o"></i>
                  <a href="#">{axe.responsable}</a>
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
      </NavLink>
    </div>
  );
};

export { AxeItem };
