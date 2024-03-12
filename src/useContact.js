import { useState, useEffect } from 'react';

const useContact = (url) => {
    const [contact, setContact] = useState(null);
    const [editContact, setEditContact] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setContact(data);
                setEditContact(data); // Initialize editContact with fetched data
            } catch (error) {
                console.error('Error fetching contact:', error);
            }
        };

        fetchContact();
    }, [url]);

// Inside useContact.js
return { contact, setContact, editContact, setEditContact, isEditing, setIsEditing };
};

export default useContact;
