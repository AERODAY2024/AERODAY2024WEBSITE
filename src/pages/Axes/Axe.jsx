import { useNavigate, useParams} from "react-router-dom";
import { axes } from "../../constants";
import AxeCard from "./components/AxeCard";
import "../../assets/styles/common/index.scss"
const Axe = () => {
  const navigate = useNavigate();
  let { axeName } = useParams();
  const currentAxe = axes[axeName];
if(currentAxe== undefined) {
  console.log("error");ù
}
  return (
    <div className="mt-5 pt-5">
      <div className="col-lg-8 col-md-10 mx-auto">
				<div className="block">
					<article className="blog-post single">
						<div className="post-thumb">
							<img src={currentAxe.image} alt="post-image" className="img-fluid"/>
						</div>
						<div className="post-content">
							<div className="date">
								<h4>20<span>May</span></h4>
							</div>
							<div className="post-title">
								<h3>{currentAxe.name}</h3>
							</div>
							<div className="post-meta">
							</div>
							<div className="post-details">
                <p>{currentAxe.description}
                </p>
									
							</div>
						</div>
					</article>
				</div>
			</div>
    </div>
  );
};

export { Axe };
