import styles from './home.module.scss'
import { useSelector } from "react-redux"
import { selectAllPosts, selectNumberOfPosts } from "../../store/features/posts/posts.selectors"
import Post from '../../components/post/post'








const Home = () => {

    const posts = useSelector( selectAllPosts )
    const postsCount = useSelector( selectNumberOfPosts )

    const renderedPosts = posts.map( post => (
        <Post post={ post } key={ post.id }/>
    ))





    return (
        <main>
            <section className={ styles.home }>
                <h3 className={ styles['home__header-text']}>All your hot posts in one place...</h3>
                <p className={ styles['home__posts-count']}>Showing { postsCount } posts</p>

                <div className={ styles['home__posts-grid']}>
                    { renderedPosts }
                </div>
            </section>
        </main>
    )
}





export default Home