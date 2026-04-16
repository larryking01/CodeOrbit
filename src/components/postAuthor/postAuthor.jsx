import './postAuthor.css'
import { useSelector } from "react-redux"
import { selectPostAuthor } from "../../store/features/users/users.selectors"
import { useEffect } from "react"









const PostAuthor = ({ userId }) => {



    const author = useSelector(state => selectPostAuthor(state, userId ))


    useEffect(() => {
        console.log("user id = ", userId)
        console.log("post author = ", author)
    }, [author])


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