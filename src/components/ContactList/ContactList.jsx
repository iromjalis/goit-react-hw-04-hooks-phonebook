import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="ContactListWrapper">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;

// class ContactList extends Component {
//   render() {
//     const { handleDeleteContact } = this.props;
//     const { contacts } = this.props;
//     return (
//       <div className="ContactListWrapper">
//         {contacts.map(({ id, name, number }) => (
//           <li key={id}>
//             {name} {number}
//             <button type="button" onClick={() => handleDeleteContact(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </div>
//     );
//   }
// }

ContactList.propTypes = {
  // bla: PropTypes.string,
};

ContactList.defaultProps = {
  // bla: 'test',
};

// export default ContactList;
