import './postInfo.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'

import { selectPostById } from '../../store/features/posts/posts.selectors'
import { createComment } from '../../store/features/comments/comments.thunks'
import Post from '../../components/post/post'
import Comment from '../../components/comment/comment'
import { getRandomUser } from '../../helpers/getRandomUser'







const PostInfo = () => {

    const dispatch = useDispatch()
    const { postId } = useParams()
    const post = useSelector(state => selectPostById(state, postId))
    const [content, setContent] = useState('')


    const handleContentChange = (event) => {
        setContent( event.target.value )
    }


    const postComment = (event) => {
        event.preventDefault()

        let commentPayload = {
            id: nanoid(5),
            content,
            postId,
            userId: getRandomUser().id,
            createdAt: new Date().toISOString()
        }

        try {
            dispatch(createComment(commentPayload)).unwrap()
        }
        catch(error) {
            // handle error later
        }

    }




    let renderedPost = post ?
        <article className="post-info">
            <Post post={ post } />

            <section className="post-comments">
                <div className='add-comment-container'>
                    <form onSubmit={ postComment }>
                        <textarea rows={ 4 } className='add-comment-input' placeholder='Add a comment' value={ content } onChange={ handleContentChange }></textarea>
                        <button type='submit'>Post comment</button>
                    </form>
                </div>

                <Comment postId={ postId } />
            </section>

        </article>
        :
        <section className="no-post">
            <p>Sorry, we could not find the post you were looking for...</p>
        </section>



    return (
        <main className="post-info-container">
            { renderedPost }
        </main>
    )
}





export default PostInfo