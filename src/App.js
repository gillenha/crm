import React, { useState, useEffect } from 'react';
import Modal from './Modal'; // Import the Modal component

function App() {
    const [showModal, setShowModal] = useState(false);
    const [currentContact, setCurrentContact] = useState(null);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      const fetchContacts = async () => {
          try {
              const response = await fetch('/contacts.json');
              const data = await response.json(); // Directly parse the response as JSON
              setContacts(data); // Updated to use setContacts
          } catch (error) {
              console.error('Error fetching contacts:', error);
          }
      };
  
      fetchContacts();
  }, []);

      // Function to open modal with contact details
      const handleOpenModal = (contact) => {
        setCurrentContact(contact);
        setShowModal(true); // This should open the modal
    };

      // Function to close the modal
      const handleCloseModal = () => {
        setShowModal(false); // This should close the modal
    };

    const handleSave = (editedContact) => {
      const updatedContacts = contacts.map(c => 
          (c["First Name"] === editedContact["First Name"] && c["Last Name"] === editedContact["Last Name"]) ? editedContact : c
      );
      setContacts(updatedContacts);
      setCurrentContact(editedContact); // Optionally update currentContact to reflect the edited version
      handleCloseModal(); // Optionally close the modal after saving
    };    
    
    const handleEdit = (editedContact) => {
      // Example logic to update a contact in the contacts array
      const updatedContacts = contacts.map(c => c.id === editedContact.id ? editedContact : c);
      setContacts(updatedContacts);
      setCurrentContact(editedContact); // Update the current contact to reflect the edit
      setShowModal(false); // Optionally close the modal
    };

    return (
      <div className="App">
          {contacts.length > 0 ? (
              <table>
                  <thead>
                      <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Company</th>
                          <th>Notes</th>
                          <th>Type</th>
                          <th>Phone</th>
                          <th>Position</th>
                          <th>Email Address</th>
                          <th>Connected On</th>
                          <th>URL</th>
                      </tr>
                  </thead>
                  <tbody>
                      {contacts.map((contact, index) => (
                          <tr key={index} onClick={() => handleOpenModal(contact)}>
                              <td>{contact["First Name"]}</td>
                              <td>{contact["Last Name"]}</td>
                              <td>{contact.Company}</td>
                              <td>{contact.Notes}</td>
                              <td>{contact.Type}</td>
                              <td>{contact.Phone}</td>
                              <td>{contact.Position}</td>
                              <td>{contact["Email Address"]}</td>
                              <td>{contact["Connected On"]}</td>
                              <td><a href={contact.URL} target="_blank" rel="noopener noreferrer">Profile</a></td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          ) : <p>Loading contacts...</p>}
          <Modal 
                showModal={showModal} 
                contact={currentContact} 
                handleSave={handleSave} 
                handleClose={handleCloseModal}
                handleEdit={handleEdit} 
          />
      </div>
  );
 }
export default App;
