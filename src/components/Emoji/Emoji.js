import React from 'react';
import styles from './Emoji.module.css';

const Emoji = ({emoji, name, addReaction, id}) => {



    const addCLickHandler = () => {
      addReaction(id, emoji)
    }
    
    return (
       
        <span onClick={addCLickHandler} className={styles.emoji}>{emoji}
            <div className={styles.tooltip}>{name}</div>
        </span> 
    )

}

export default React.memo(Emoji);