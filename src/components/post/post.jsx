import styles from './post.module.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { IoMdBookmark } from "react-icons/io";
import { GoBookmark } from "react-icons/go";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegCommentAlt  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


import PostAuthor from '../postAuthor/postAuthor';
import { deletePostAsync } from '../../store/features/posts/posts.thunks';
import { deletePost, updatePostLikes, updatePostBookmarks } from '../../store/features/posts/posts.slice';
import { selectPostLikedStatus, selectPostBookmarkedStatus } from '../../store/features/posts/posts.selectors';
import { selectNumberOfComments } from '../../store/features/comments/comments.selectors';






const Post = ({ post }) => {

    const [showReadText, setShowReadText] = useState( true )
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLiked = useSelector(state => selectPostLikedStatus(state, post.id))
    const isBookmarked = useSelector(state => selectPostBookmarkedStatus(state, post.id))

    const numberOfComments = useSelector(state => selectNumberOfComments(state, post.id))


    // show "Read" or "Delete" action on post based on current route
    useEffect(() => {
        if(location.pathname === '/') {
            setShowReadText( true )
        }
        else {
            setShowReadText( false )
        }

        console.log("isLiked = ", isLiked)
        console.log("isBookmarked = ", isBookmarked)
        console.log("number of comments = ", numberOfComments)

    },[showReadText, location, isBookmarked, isLiked])



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


    // like or unlike a post
    const handleLikeOrUnlikePost = async (postId) => {
        try {
            dispatch(updatePostLikes(postId))
        }
        catch(error) {
            // handle error later 
            console.log("error updating posts like feature: ", error)
        }

    }


    // add or remove bookmark
    const handleAddOrRemoveBookmark = async (postId) => {
        try {
            dispatch(updatePostBookmarks(postId))
        }
        catch(error) {
            // handle error later 
            console.log("error updating posts bookmark feature: ", error)
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
                    {
                        isLiked ?
                            <p className={styles.postCard__iconWrapper} onClick={() => handleLikeOrUnlikePost(post.id)}>
                                <FcLike size={22} />
                            </p>
                            :
                            <p className={styles.postCard__iconWrapper} onClick={() => handleLikeOrUnlikePost(post.id)}>
                                <IoMdHeartEmpty size={22} />
                            </p>
                    }
                    <p className={styles.postCard__iconCount}>{post.reactions.numberOfLikes}</p>
                </div>

                <div className={styles.postCard__iconContainer}>
                    {
                        isBookmarked ?
                            <p className={styles.postCard__iconWrapper} onClick={() => handleAddOrRemoveBookmark(post.id)}>
                                <IoMdBookmark size={20} color='red' />
                            </p>
                            :
                            <p className={styles.postCard__iconWrapper} onClick={() => handleAddOrRemoveBookmark(post.id)}>
                                <GoBookmark size={20} />
                            </p>
                    }
                    <p className={styles.postCard__iconCount}>{post.reactions.numberOfBookmarks}</p>
                </div>

                <div className={styles.postCard__iconContainer}>
                    <p className={styles.postCard__iconWrapper}>
                        <AiOutlineComment size={20} />
                    </p>
                    <p className={styles.postCard__iconCount}>{ numberOfComments }</p>
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