import styles from './addPost.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

import { addNewPost } from '../../store/features/posts/posts.slice'
import { createPost } from '../../store/features/posts/posts.thunks'
import { getCurrentUser } from '../../store/features/users/users.selectors'










const AddPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(getCurrentUser)


    const handleTitleChange = (event) => {
        setTitle( event.target.value )
    }


    const handleContentChange = (event) => {
        setContent( event.target.value )
    }


    const submitPost = async (event) => {
        event.preventDefault()
        let postPayload = {
            id: nanoid(5),    
            title,
            content,
            userId: currentUser.id,
            createdAt: new Date().toISOString(),
            reactions: {
                numberOfLikes: 0,
                numberOfComments: 0,
                numberOfBookmarks: 0,
                isBookmarked: false,
                isLiked: false
            }
        }

        try {
            dispatch(addNewPost(postPayload))
            await dispatch(createPost( postPayload )).unwrap()
            navigate('/')       
        }
        catch( error ) {
            alert(error.message)
            navigate('/')       
        }
    }



    return (
        <main className={ styles.addPost }>
            <h3 className={ styles.addPost__header }>What's on your mind?</h3>
            <p className={ styles.addPost__subtitle }>Craft your next social post effortlessly</p>

            <form onSubmit={ submitPost } className={ styles.addPost__form }>
                <div className={ styles['addPost__input-container'] }>
                    <label for='post-title' className={ styles.addPost__label }>Title</label>
                    <input type='text' name='post-title' className={ styles.addPost__input } value={ title } onChange={ handleTitleChange } />
                </div>

                <div className={ styles['addPost__input-container'] }>
                    <label for='post-content' className={ styles.addPost__label }>Content</label>
                    <textarea rows={ 8 } name='post-content' className={ styles.addPost__textarea } value={ content } onChange={ handleContentChange }></textarea>
                </div>

                <button type='submit' className={ styles.addPost__button }>Create</button>
            </form>
        </main>
    )
}




export default AddPost