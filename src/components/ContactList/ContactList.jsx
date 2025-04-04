import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {

    return (
        <div className={styles.ContactList} >
            {contacts.length > 0 ? (
                contacts.map(({ id, name, number }) => (
                    <Contact key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
                ))
            ) : (
                <p>No contacts found</p>
            )}

        </div>
    );
};

export default ContactList;