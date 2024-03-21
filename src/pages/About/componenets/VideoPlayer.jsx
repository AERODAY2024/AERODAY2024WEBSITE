import { useEffect, useRef, useState } from "react";
import "../../../assets/styles/components/video-player.scss";

const VideoPlayer = () => {
  const cloudinaryRef = useRef();
  const videoRef = useRef();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "dwxnwtaly",
    });
  }, []);

  return (
    <section className="video-section mb-5" data-setbg="img/video-bg.jpg">
      <div className="container">
        <div className="row">
          <h2>
            <span className="alternate">TUNISIAN AERODAY</span>
          </h2>
          <video
            ref={videoRef}
            data-cld-public-id="AERODAY2024/about-us/aftermovie"
            controls
            width={width < 768 ? width - 40 : width - 100}
            height={width < 768 ? (width - 40) * 0.5625 : (width - 50) * 0.5625}
          />
        </div>
      </div>
    </section>
  );
};

export { VideoPlayer };
