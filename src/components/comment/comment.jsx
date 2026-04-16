import styles from './comment.module.scss'
import { useSelector } from 'react-redux'
import { selectCommentByPostId, selectNumberOfComments } from '../../store/features/comments/comments.selectors'
import CommentAuthor from '../commentAuthor/commentAuthor'









const Comment = ({ postId }) => {

    const comments = useSelector(state => selectCommentByPostId(state, postId ))

    const commentsCount = useSelector(state => selectNumberOfComments(state, postId) )

    let renderedComments = commentsCount > 0 ?
        comments.map( comment => (
            <article className={styles['comment__comment-item']}>
                <CommentAuthor userId={ comment.userId } />
                <p>{ comment.content }</p>
            </article>
        ))
        :
        <article>
            <p>There are no comments for this post yet.</p>
        </article>




    return (
        <main className={ styles.comment }>
            { commentsCount > 0 ? 
                <h4>{ commentsCount } Comments</h4>  
                :
                <h4>No available comments</h4>      
            }

            <hr className={ styles.comment__hr }/>
            { renderedComments }
        </main>
    )
}



export default Comment