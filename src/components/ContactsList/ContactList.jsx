import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <div>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button value={id} onClick={() => onDeleteContact(id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
