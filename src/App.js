import { Component } from "react";
import shortid from "shortid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  handleSubmit = (data) => {
    this.setState({ ...data });
    this.setState({ name: "", number: "" });
  };
  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  handleAddContact = (data) => {
    const newContact = {
      id: shortid.generate(),
      ...data,
    };

    if (this.state.contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <Container className="App">
          <h1>Phonebook</h1>
          <ContactForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            onSubmit={this.handleAddContact}
          />
          <h2>Contacts</h2>
          <Filter value={filter} handleFilterChange={this.handleFilterChange} />
          <ContactList
            contacts={filtered}
            handleDeleteContact={this.handleDeleteContact}
          />
        </Container>
      </>
    );
  }
}

export default App;
