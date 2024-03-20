const Gallery = ({ images }) => {
  return (
    <div className="gallery-wrapper row">
      {images.map((image, index) => {
        return (
          <div className="gallery-item col-lg-4 col-md-6" key={index}>
            <div className="image-block">
              <div className="image">
                <img src={image} alt="gallery-image" className="img-fluid" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Gallery };
