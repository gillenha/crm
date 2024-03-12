const ContactCard = ({ contact, onEdit }) => (
    <div className="contact-card">
        <p>First Name: {contact["First Name"]}</p>
        <p>Last Name: {contact["Last Name"]}</p>
        <p>Company: {contact["Company"]}</p>
        <p>Notes: {contact["Notes"]}</p>
        <p>Type: {contact["Type"]}</p>
        <p>Phone: {contact["Phone"]}</p>
        <p>Position: {contact["Position"]}</p>
        <p>Email Address: {contact["Email Address"]}</p>
        <p>Connected On: {contact["Connected On"]}</p>
        <p>URL: <a href={contact["URL"]} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <button onClick={onEdit}>Edit</button>
    </div>
);

export default ContactCard;
