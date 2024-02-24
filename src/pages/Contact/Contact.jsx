import "../../assets/styles/pages/contact.scss";
import { ContactForm } from "../../components";
import { OurContacts } from "./component";

const Contact = () => {
  return (
    <section className="section contact-form">
      <OurContacts />
      <ContactForm />
    </section>
  );
};

export { Contact };
