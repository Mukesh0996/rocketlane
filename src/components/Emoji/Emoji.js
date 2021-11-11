import styles from './Emoji.module.css';

const Emoji = ({emoji, name, addReaction}) => {



    const addCLickHandler = () => {
      addReaction(emoji, name)
    }
    
    return (
        <div onClick={addCLickHandler} className={styles.emoji}>{emoji}
            <div className={styles.tooltip}>{name}</div>
        </div>
    )

}

export default Emoji;