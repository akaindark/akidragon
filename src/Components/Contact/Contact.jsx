import React from 'react';
import contact from './Contact.module.css';
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className={contact.contact}>
      <div className={contact.image}>
        <img className={contact.img} src="" alt=""/>
      </div>
      <div className={contact.content}>
        <p className={contact.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab beatae commodi delectus error nesciunt praesentium quibusdam quidem tenetur vero.
        </p>
        <Button />
      </div>
    </div>
  );
}
export default Contact;