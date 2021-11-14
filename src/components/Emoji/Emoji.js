import React from 'react';
import styles from './Emoji.module.css';

const Emoji = ({emoji, name, addReaction, id}) => {



    const addCLickHandler = () => {
      addReaction(id)
    }
    
    return (
        <div onClick={addCLickHandler} className={styles.emoji}>{emoji}
            <div className={styles.tooltip}>{name}</div>
        </div>
    )

}

export default React.memo(Emoji);