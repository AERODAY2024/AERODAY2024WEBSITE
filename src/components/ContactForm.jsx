const ContactForm = () => {
  return (
    <section className="section contact-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>
                Get in <span className="alternate">Touch</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores, velit.
              </p>
            </div>
          </div>
        </div>
        <form action="#" className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control main"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control main"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control main"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className="col-md-12">
            <textarea
              name="message"
              id="message"
              className="form-control main"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-main-md">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
