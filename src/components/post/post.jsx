import styles from './post.module.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegCommentAlt  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


import PostAuthor from '../postAuthor/postAuthor';
import { deletePostAsync } from '../../store/features/posts/posts.thunks';
import { deletePost } from '../../store/features/posts/posts.slice';








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

    },[showReadText, location])



    // delete a post by its id
    const handleDeletePost = async (post) => {
        try {
            dispatch(deletePost(post))
            await dispatch(deletePostAsync(post)).unwrap()
            navigate('/')
        }
        catch(error) {
            // handle error later
            navigate('/')        
        }
    }

    

    return (
        <article className={styles.postCard} key={post.id}>
            <section className={styles.postCard__header}>
                <PostAuthor userId={post.userId} />

                {showReadText ? (
                <Link to={`post-info/${post.id}`} className="link">
                    <p className={styles.postCard__readMore}>Read</p>
                </Link>
                ) : (
                <p
                    className={styles.postCard__readMore}
                    onClick={() => handleDeletePost(post)}
                >
                    <MdDelete size={20} />
                </p>
                )}
            </section>

            <section className={styles.postCard__details}>
                <h3 className={styles.postCard__title}>{post.title}</h3>
                <p className={styles.postCard__content}>{post.content}</p>
            </section>

            <section className={styles.postCard__metadata}>
                <div className={styles.postCard__iconContainer}>
                    <p className={styles.postCard__iconWrapper}>
                        <AiOutlineLike size={22} />
                    </p>
                    <p className={styles.postCard__iconCount}>{post.reactions.numberOfLikes}</p>
                </div>

                <div className={styles.postCard__iconContainer}>
                    <p className={styles.postCard__iconWrapper}>
                        <FaRegBookmark size={20} />
                    </p>
                    <p className={styles.postCard__iconCount}>{post.reactions.numberOfComments}</p>
                </div>

                <div className={styles.postCard__iconContainer}>
                    <p className={styles.postCard__iconWrapper}>
                        <FaRegCommentAlt size={20} />
                    </p>
                    <p className={styles.postCard__iconCount}>{post.reactions.numberOfBookmarks}</p>
                </div>

                <div className={styles.postCard__dateContainer}>
                    <p className={styles.postCard__iconCount}>
                        Last Updated: {new Date().toISOString().split('T')[0]}
                    </p>
                </div>
            </section>
        </article>   
     )
}





export default Post