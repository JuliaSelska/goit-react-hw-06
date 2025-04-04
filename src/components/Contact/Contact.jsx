import styles from './Contact.module.css'
import clsx from 'clsx';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                    <BsPersonFill className={styles.icon} /> {name}
                </p>
                <p className={styles.contactItem}>
                    <BsFillTelephoneFill className={styles.icon} /> {number}
                </p>
            </div>

            <button onClick={() => onDeleteContact(id)} className={styles.contactButton}>Delete</button>

        </div>
    );
};

export default Contact;