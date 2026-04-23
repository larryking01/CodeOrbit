import styles from './postInfo.module.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'

import { selectPostById } from '../../store/features/posts/posts.selectors'
import { createComment } from '../../store/features/comments/comments.slice'
import { createCommentAsync } from '../../store/features/comments/comments.thunks'
import Post from '../../components/post/post'
import Comment from '../../components/comment/comment'
import { getCurrentUser } from '../../store/features/users/users.selectors'






const PostInfo = () => {

    const dispatch = useDispatch()
    const { postId } = useParams()
    const post = useSelector(state => selectPostById(state, postId))
    const currentUser = useSelector(getCurrentUser)
    const [content, setContent] = useState('')


    const handleContentChange = (event) => {
        setContent( event.target.value )
    }


    const postComment = async (event) => {
        event.preventDefault()

        let commentPayload = {
            id: nanoid(5),
            content,
            postId,
            userId: currentUser.id,
            createdAt: new Date().toISOString()
        }

        try {
            dispatch(createComment(commentPayload))
            await dispatch(createCommentAsync(commentPayload)).unwrap()
        }
        catch(error) {
            // handle error later
            console.log("error adding new comment", error)
        }

    }


    let renderedPost = post ? 
        <article className={styles.postInfo}>
            <Post post={post} />

            <section className={styles.postInfo__comments}>
                <div className={styles.postInfo__addCommentContainer}>
                    <form onSubmit={postComment}>
                        <textarea
                            rows={4}
                            className={styles.postInfo__addCommentInput}
                            placeholder="Add a comment"
                            value={content}
                            onChange={handleContentChange}
                        ></textarea>

                        <button type="submit" className={styles.postInfo__button}>
                            Post comment
                        </button>
                    </form>
                </div>

                <Comment postId={postId} />
            </section>
        </article>
        : 
        <article className={styles.postInfo__noPost}>
            <p>Sorry, we could not find the post you were looking for...</p>
        </article>
    

    return (
    <main className={styles.postInfoContainer}>
        {renderedPost}
    </main>
    )


}





export default PostInfo