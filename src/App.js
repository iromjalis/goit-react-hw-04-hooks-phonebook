import { useState, useEffect } from "react";
import shortid from "shortid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";

import React from "react";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts
    );
  });

  // const filteredContacts = (contacts, filter) => {
  //   return contacts.filter(({ name }) =>
  //     name.includes(filter.toLocaleLowerCase())
  //   );
  // };

  //componentDidMount
  useEffect(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts) {
      setContacts(JSON.parse(contacts));
    } else setContacts(initialContacts);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (data) => {
    console.log("name: ", name);
    if (contacts.some((contact) => contact.name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    }

    setContacts((contacts) => {
      const newContact = {
        id: shortid.generate(),
        ...data,
      };
      console.log("newContact", newContact);
      return [newContact, ...contacts];
    });
    setName("");
    setNumber("");
  };
  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = (contactId) => {
    console.log("contactId: ", contactId);
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };
  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  return (
    <>
      <Container className="App">
        {/* <h1>Phonebook</h1> */}
        <ContactForm name={name} number={number} onSubmit={handleAddContact} />
        {/* <h2>Contacts</h2> */}
        <Filter value={filter} onFilterChange={handleFilterChange} />
        <ContactList
          contacts={getVisibleContacts(contacts, filter)}
          onDeleteContact={handleDeleteContact}
        />
      </Container>
    </>
  );
}
export default App;
