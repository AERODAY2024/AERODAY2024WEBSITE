import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./index";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleContactFormSubmission = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const contactRequest = {
      name,
      email,
      phone,
      message,
    };

    try {
      const colRef = collection(db, "ContactRequests");
      const docRef = await addDoc(colRef, contactRequest);
      console.log("Document written with ID: ", docRef.id);
      clearForm();
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="section contact-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>
                Contactez <span className="alternate">Nous</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores, velit.
              </p>
            </div>
          </div>
        </div>
        <form className="row" onSubmit={handleContactFormSubmission}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control main"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control main"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control main"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <textarea
              id="message"
              className="form-control main"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="col-12 text-center row mx-auto">
            <button
              type="submit"
              className="btn btn-main-md  mx-auto col-md-5"
              disabled={isLoading || !name || !email || !phone || !message}
            >
              Send Message
            </button>
            <button
              type="button"
              className="btn btn-main-md mx-auto col-md-5 "
              onClick={clearForm}
            >
              Clear Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export { ContactForm };
