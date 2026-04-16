import './postAuthor.scss'
import { useSelector } from "react-redux"
import { selectPostAuthor } from "../../store/features/users/users.selectors"









const PostAuthor = ({ userId }) => {



    const author = useSelector(state => selectPostAuthor(state, userId ))

    let postAuthor = author ?
        <section className="user-profile">
            <img 
                src={ author.avatar }
                alt="user profile pic"
            />

            <div className="user-info">
                <main className="post-author">
                    <h3>{author.name}</h3>
                    <p>{author.role}</p>
                    <p>{author.location}</p>
                </main>
            </div>
        </section>
        :
        <section className="user-profile">
            <p>No author information available...</p>
        </section>



    return (
        <main>
            { postAuthor }
        </main>
    )



    

}



export default PostAuthor