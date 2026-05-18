import styles from './comment.module.scss'
import CommentAuthor from '../commentAuthor/commentAuthor'
import { useGetCommentsByPostIdQuery } from '../../store/features/api/apiSlice'









const Comment = ({ postId }) => {


    const { data: comments = [] } = useGetCommentsByPostIdQuery( postId )

    let renderedComments = comments.length > 0 ?
        comments.map( comment => (
            <article className={styles['comment__comment-item']} key={ comment.id }>
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
            { comments.length > 0 ? 
                <h4>{ comments.length } Comment(s)</h4>  
                :
                <h4>No available comments</h4>      
            }

            <hr className={ styles.comment__hr }/>
            { renderedComments }
        </main>
    )
}



export default Comment