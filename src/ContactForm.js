const ContactForm = ({ editContact, handleInputChange, handleSubmit, handleCancel }) => (
    <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input
                type="text"
                name="First Name"
                value={editContact["First Name"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Last Name:
            <input
                type="text"
                name="Last Name"
                value={editContact["Last Name"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Company:
            <input
                type="text"
                name="Company"
                value={editContact["Company"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Notes:
            <textarea
                name="Notes"
                value={editContact["Notes"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Type:
            <input
                type="text"
                name="Type"
                value={editContact["Type"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Phone:
            <input
                type="text"
                name="Phone"
                value={editContact["Phone"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Position:
            <input
                type="text"
                name="Position"
                value={editContact["Position"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Email Address:
            <input
                type="email"
                name="Email Address"
                value={editContact["Email Address"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Connected On:
            <input
                type="date"
                name="Connected On"
                value={editContact["Connected On"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <label>
            URL:
            <input
                type="url"
                name="URL"
                value={editContact["URL"] || ''}
                onChange={handleInputChange}
            />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
);

export default ContactForm;
