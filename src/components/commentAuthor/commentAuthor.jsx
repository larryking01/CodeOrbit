import './commentAuthor.css'
import { useSelector } from "react-redux"
import { selectPostAuthor } from "../../store/features/users/users.selectors"
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";







const CommentAuthor = ({ userId }) => {



    const author = useSelector(state => selectPostAuthor(state, userId ))

    let commentAuthor = author ? 
        <section className="comment-owner">
            <img 
                src={ author.avatar }
                alt="user profile pic"
            />

            <div className="user-info">
                <main className="post-author">
                    <h3>{author.name}</h3>
                    <GoDot size={ 12 } className="dot-fill" />
                    <p>4 days ago</p>
                </main>
            </div>
        </section>
        :
        <section className="comment-owner">
            <p>No author information available...</p>
        </section>


    return (
        <main>
            { commentAuthor }
        </main>
    )

    

}



export default CommentAuthor