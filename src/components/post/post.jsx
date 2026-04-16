import './post.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegCommentAlt  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


import PostAuthor from '../postAuthor/postAuthor';
import { deletePost } from '../../store/features/posts/posts.thunks';








const Post = ({ post }) => {

    const [showReadText, setShowReadText] = useState( true )
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // show "Read" or "Delete" action on post based on current route
    useEffect(() => {
        if(location.pathname === '/') {
            setShowReadText( true )
        }
        else {
            setShowReadText( false )
        }

    },[showReadText])



    // delete a post by its id
    const handleDeletePost = (post) => {
        try {
            dispatch(deletePost(post.id)).unwrap()
            navigate('/')

        }
        catch(error) {
            // handle error later
        }
    }

    

    return (
        <article className="post-card" key={ post.id }>
            <section className="post-header">
                <PostAuthor userId={ post.userId } />

                {
                    showReadText ?
                        <Link to={`post-info/${ post.id }`} className="link">
                            <p className="read-more-text">
                                Read
                            </p>
                        </Link>
                        :
                        <p className="read-more-text" onClick={() => handleDeletePost( post )}>
                            <MdDelete  size={ 20 } />
                        </p>
                }

            </section>

            <section className="post-details">
                <h3>{ post.title }</h3>
                <p>{ post.content }</p>
            </section>

            <section className="post-metadata">
                <div className="icon-container">
                    <p className="icon-wrapper">
                        <AiOutlineLike size={ 22 } />
                    </p>
                    <p className="icon-data-count">{ post.like_count }</p>
                </div>

                <div className="icon-container">
                    <p className="icon-wrapper">
                        <FaRegBookmark size={ 20 } />
                    </p>
                    <p className="icon-data-count">{ post.like_count }</p>
                </div>

                <div className="icon-container">
                    <p className="icon-wrapper">
                        <FaRegCommentAlt size={ 20 } />
                    </p>
                    <p className="icon-data-count">{ post.like_count }</p>
                </div>

                <div className="icon-date-container">
                    <p className="icon-data-count">Last Updated: { new Date().toISOString().split('T')[0] }</p>
                </div>
            </section>
        </article>
    )
}





export default Post