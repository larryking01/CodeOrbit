import styles from './commentAuthor.module.scss'
import { useSelector } from "react-redux"
import { selectPostAuthor } from "../../store/features/users/users.selectors"
import { GoDot } from "react-icons/go";







const CommentAuthor = ({ userId }) => {



    const author = useSelector(state => selectPostAuthor(state, userId ))

    let commentAuthor = author ? 
        <section className={styles.commentOwner}>
            <img
            src={author.avatar}
            alt="user profile pic"
            className={styles.commentOwner__avatar}
            />

            <div className={styles.commentOwner__userInfo}>
            <main className={styles.commentOwner__author}>
                <h3 className={styles.commentOwner__name}>{author.name}</h3>
                <GoDot size={12} className={styles.commentOwner__dot} />
                <p className={styles.commentOwner__time}>4 days ago</p>
            </main>
            </div>
        </section>
        : 
        <section className={styles.commentOwner}>
            <p>No author information available...</p>
        </section>

    return (
        <main>
            { commentAuthor }
        </main>
    )

    

}



export default CommentAuthor