import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Hall",
        email: "khall@gmail.com",
        phone: "444-444-4444"
      },
      {
        id: 3,
        name: "Henry Wood",
        email: "hwood.com",
        phone: "333-333-3333"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}

export default Contacts;
