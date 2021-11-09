import Emoji from '../Emoji/Emoji';
import styles from './Reaction.module.css';

const Reaction = () => {

    let emojiLists = [
        {
          "id": 1,
          "name": "Like",
          "emoji": "👍"
        },
        {
          "id": 2,
          "name": "Love",
          "emoji": "❤️"
        },
        {
          "id": 3,
          "name": "Haha",
          "emoji": "😂"
        },
        {
          "id": 4,
          "name": "Wow",
          "emoji": "😮"
        },
        {
          "id": 5,
          "name": "Sad",
          "emoji": "😥"
        },
        {
          "id": 6,
          "name": "Angry",
          "emoji": "😡"
        }
      ]
    
    const addReactionHandler = () => {
       
    }

    return (<div className={styles.addReaction} onClick={addReactionHandler} tabIndex="1" >
                <svg className={styles.addEmoji} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77415 11C6.72054 10.9984 5.745 10.4442 5.20415 9.54L4.34915 10.04C5.07317 11.2401 6.37254 11.9738 7.77415 11.9738C9.17576 11.9738 10.4751 11.2401 11.1992 10.04L10.3441 9.54C9.8033 10.4442 8.82776 10.9984 7.77415 11ZM14.7741 2H12.7741V0H11.7741V2H9.77415V3H11.7741V5H12.7741V3H14.7741V2ZM5.52415 5.5C4.83379 5.5 4.27415 6.05964 4.27415 6.75C4.27415 7.44036 4.83379 8 5.52415 8C6.21451 8 6.77415 7.44036 6.77415 6.75C6.77684 6.41766 6.64601 6.09815 6.411 5.86315C6.176 5.62814 5.85649 5.49731 5.52415 5.5ZM10.0241 5.5C9.33379 5.5 8.77415 6.05964 8.77415 6.75C8.77415 7.44036 9.33379 8 10.0241 8C10.7145 8 11.2741 7.44036 11.2741 6.75C11.2768 6.41766 11.146 6.09815 10.911 5.86315C10.676 5.62814 10.3565 5.49731 10.0241 5.5ZM13.5792 6.5C13.7055 6.9901 13.771 7.49389 13.7741 8C13.7741 11.3137 11.0879 14 7.77415 14C4.46044 14 1.77415 11.3137 1.77415 8C1.77415 4.68629 4.46044 2 7.77415 2V1C4.80455 0.998983 2.15749 2.87179 1.17006 5.67242C0.182632 8.47304 1.06976 11.5919 3.38334 13.4536C5.69691 15.3153 8.93336 15.5146 11.4579 13.9508C13.9824 12.3871 15.2455 9.40062 14.6091 6.5H13.5792Z" fill="black"/>
                </svg>
                <div className={styles.emojiIcons}>
                    { emojiLists.map((emoji, index)=> <Emoji key={emoji.id} leftVal={emoji.id*25} value={emoji.value} id={emoji.id} emoji={emoji.emoji} />)}
                </div>
            </div>
        )
}

export default Reaction;