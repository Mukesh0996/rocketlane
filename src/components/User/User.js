import React from 'react';
import Reaction from '../Reaction/Reaction';
import styles from './User.module.css';

const User = ({fName, lName, image, user_id}) => {
   
    return (
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <img src={image} alt=""/>
                </div>
                    <h2 className={styles.fName}>{fName}</h2>
                    <h2 className={styles.lName}>{lName}</h2>
                    <Reaction user_id={user_id} />
            </div>
            )

}

export default React.memo(User);