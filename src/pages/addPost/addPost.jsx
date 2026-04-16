import './addPost.css'
import { getRandomUser } from '../../helpers/getRandomUser'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createPost } from '../../store/features/posts/posts.thunks'
import { nanoid } from 'nanoid'






const AddPost = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleTitleChange = (event) => {
        setTitle( event.target.value )
    }

    const handleContentChange = (event) => {
        setContent( event.target.value )
    }

    const submitPost = (event ) => {
        event.preventDefault()
        let postPayload = {
            id: nanoid(5),
            title,
            content,
            userId: getRandomUser().id,
            like_count: 0,
            isBookmarked: false,
            createdAt: new Date().toISOString()
        }

        try {
            dispatch(createPost( postPayload )).unwrap()
        }
        catch( error ) {
            // handle error later
        }
    }



    return (
        <main className='add-post'>
            <h3 className='header'>What's on your mind?</h3>
            <p className='header-description'>Craft your next social post effortlessly</p>

            <form onSubmit={ submitPost }>
                <div className='input-container'>
                    <label for='post-title'>Title</label>
                    <input type='text' name='post-title' className='post-title' value={ title } onChange={ handleTitleChange } />
                </div>

                <div className='input-container'>
                    <label for='post-content'>Content</label>
                    <textarea rows={ 8 } name='post-content' className='post-content' value={ content } onChange={ handleContentChange }></textarea>
                </div>

                <button type='submit'>Create</button>
            </form>
        </main>
    )
}




export default AddPost