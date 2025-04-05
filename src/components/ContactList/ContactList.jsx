import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'
import { useSelector } from 'react-redux';

const ContactList = ({ onDeleteContact }) => {

    const contacts = useSelector((state) => state.contacts.item)

    return (
        <div className={styles.ContactList} >
            <p>Contact: {contacts}</p>
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