import React, { useState, useEffect } from 'react';

const Modal = ({ showModal, contact, handleSave, handleClose }) => {
    // Initialize editContact state with the contact prop. This state is used to manage the editable form fields.
    const [editContact, setEditContact] = useState(contact);
    const [isEditing, setIsEditing] = useState(false);

    // This effect updates editContact whenever the contact prop changes, which can happen when a different contact is selected to be edited.
    useEffect(() => {
        setEditContact(contact);
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditContact({ ...editContact, [name]: value });
    };

    const saveEdit = () => {
        handleSave(editContact);
        setIsEditing(false); // Exit editing mode
    };

    // Conditional rendering moved below the hook calls.
    if (!showModal || !contact) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Contact Details</h2>
                {isEditing ? (
                    <>
                        {/* Render inputs for editing contact details */}
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="First Name"
                                value={editContact["First Name"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="Last Name"
                                value={editContact["Last Name"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Company:
                            <input
                                type="text"
                                name="Company"
                                value={editContact["Company"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Notes:
                            <input
                                type="text"
                                name="Notes"
                                value={editContact["Notes"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Type:
                            <input
                                type="text"
                                name="Type"
                                value={editContact["Type"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="Phone"
                                value={editContact["Phone"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Position:
                            <input
                                type="text"
                                name="Position"
                                value={editContact["Position"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email Address:
                            <input
                                type="text"
                                name="Email Address"
                                value={editContact["Email Address"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Connected On:
                            <input
                                type="date"
                                name="Connected On"
                                value={editContact["Connected On"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            URL:
                            <input
                                type="text"
                                name="URL"
                                value={editContact["URL"] || ''}
                                onChange={handleChange}
                            />
                        </label>
                        {/* Add inputs for other contact properties similarly */}
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        {/* Display contact details */}
                        <p><strong>Name:</strong> {contact["First Name"]} {contact["Last Name"]}</p>
                        <p><strong>Company:</strong> {contact["Company"]}</p>
                        <p><strong>Notes:</strong> {contact["Notes"]}</p>
                        <p><strong>Type:</strong> {contact["Type"]}</p>
                        <p><strong>Phone:</strong> {contact["Phone"]}</p>
                        <p><strong>Position:</strong> {contact["Position"]}</p>
                        <p><strong>Email Address:</strong> {contact["Email Address"]}</p>
                        <p><strong>Connected On:</strong> {contact["Connected On"]}</p>
                        <p><strong>URL:</strong> {contact["Url"]}</p>
                        {/* Display other contact details similarly */}
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </>
                )}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
