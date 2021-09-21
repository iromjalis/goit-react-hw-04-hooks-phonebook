import { useState, useEffect } from "react";
import shortid from "shortid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";

import React from "react";

const initialContactsContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts"));
  });
  console.log(contacts, "contacts");

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.includes(filter.toLocaleLowerCase())
    );
  };

  //componentDidMount
  useEffect(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} already exists`);
      return;
    }

    setContacts((prevContacts) => {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      };
      return [newContact, ...contacts];
    });
    setName("");
    setNumber("");
  };
  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };
  return (
    <>
      <Container className="App">
        {/* <h1>Phonebook</h1> */}
        <ContactForm name={name} number={number} onSubmit={handleAddContact} />
        {/* <h2>Contacts</h2> */}
        <Filter value={filter} onFilterChange={handleFilterChange} />
        <ContactList
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
        />
      </Container>
    </>
  );
}
export default App;
