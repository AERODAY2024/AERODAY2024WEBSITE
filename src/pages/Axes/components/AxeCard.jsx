const AxeCard = ({ axe }) => {
  return (
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
  );
};

export default AxeCard;
