import React from 'react';
import ContactCard from './ContactCard'; // Ensure this is implemented
import ContactForm from './ContactForm'; // Ensure this is implemented
import useContact from './useContact';

function App() {
    const {
        contact, 
        editContact, 
        setContact,
        setEditContact, 
        isEditing, 
        setIsEditing
    } = useContact('http://localhost:3001/contact');

    function handleInputChange(e) {
    const { name, value } = e.target;
    setEditContact({ ...editContact, [name]: value });
  }

    async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editContact),
      });
      await response.json();
      setContact(editContact);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  }

    function handleEdit() {
    return setIsEditing(true);
  }
    function handleCancel() {
    setIsEditing(false);
    setEditContact(contact); // Reset editContact to original data
  }

    return (
        <div className="App">
            {contact ? (
                !isEditing ? (
                    <ContactCard contact={contact} onEdit={handleEdit} />
                ) : (
                    <ContactForm
                        editContact={editContact}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel}
                    />
                )
            ) : <p>Loading contact information...</p>}
        </div>
    );
}

export default App;
