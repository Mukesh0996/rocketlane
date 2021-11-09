import styles from './Emoji.module.css';

const Emoji = ({emoji, name, id, leftVal}) => {



    const addEmojiHandler = (event) => {
        console.log(emoji, name);
    }
    
    return (
        <div onClick={addEmojiHandler} className={styles.emoji}>{emoji}
            <div className={styles.tooltip}>{name}</div>
        </div>
    )

}

export default Emoji;