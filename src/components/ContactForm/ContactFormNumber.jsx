import React from "react";

const ContactFormNumber = ({ title, onChange, value }) => {
  return (
    <>
      <label htmlFor="">
        {title}
        <input
          value={value}
          placeholder={title}
          onChange={onChange}
          type="tel"
          name={title}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
    </>
  );
};

export default ContactFormNumber;
