import styles from './Emoji.module.css';

const Emoji = ({emoji, value, id}) => {

    return (
        <div className={styles.emoji}>{emoji}
            <div className={styles.tooltip}>{value}</div>
        </div>
    )

}

export default Emoji;