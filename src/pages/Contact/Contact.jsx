import { images } from "../../assets/images";
import "../../assets/styles/pages/contact.scss";
import { ContactForm, PageTitle } from "../../components";
import { getRandomElement } from "../../utils";
import { OurContacts } from "./component";

const Contact = () => {
  const bgImage = getRandomElement(images);

  return (
    <>
      <PageTitle page={"ABOUT"} title={"ABOUT"} bgImage={bgImage} />

      <section className="section contact-form">
        <OurContacts />
        <ContactForm />
      </section>
    </>
  );
};

export { Contact };
