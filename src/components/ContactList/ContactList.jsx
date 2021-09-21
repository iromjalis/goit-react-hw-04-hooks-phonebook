import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="ContactListWrapper">
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.ContactItem}>
            <span>{name}: </span>
            <span className={css.ContactItem_number}>{number}</span>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                type="submit"
                className={css.Btn}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
