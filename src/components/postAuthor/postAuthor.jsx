import styles from './postAuthor.module.scss'
import { useSelector } from "react-redux"
import { selectPostAuthor } from "../../store/features/users/users.selectors"









const PostAuthor = ({ userId }) => {



    const author = useSelector(state => selectPostAuthor(state, userId ))

    let postAuthor = author ?
        <section className={ styles.userProfile }>
            <img 
                src={ author.avatar }
                alt="user profile pic"
                className={ styles.userProfile__img }
            />

            <div className={styles['userProfile__user-info']}>
                <main className={ styles['userProfile__post-author']}>
                    <h3>{author.name}</h3>
                    <p>{author.role}</p>
                    <p>{author.location}</p>
                </main>
            </div>
        </section>
        :
        <section className={ styles.userProfile }>
            <p>No author information available...</p>
        </section>



    return (
        <main>
            { postAuthor }
        </main>
    )



    

}



export default PostAuthor