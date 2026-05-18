import styles from './home.module.scss'
import { useGetPostsQuery } from '../../store/features/api/apiSlice'
import Post from '../../components/post/post'
import LoadingIndicator from '../../components/loadingIndicator/loadingIndicator'
import { useEffect, useState } from 'react'










const Home = () => {
    
    const [ sortedPosts, setSortedPosts ] = useState([])

    const { data: posts = [], isLoading } = useGetPostsQuery()

    useEffect(() => {
        let sorted = posts.slice().sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        setSortedPosts( sorted )
        
        console.log("posts = ", posts)
        console.log("sorted posts = ", sortedPosts)
    },[ posts ])


    const renderedPosts = sortedPosts.map( post => (
        <Post post={ post } key={ post.id }/>
    ))




    return (
        <main>
            {
                isLoading ?
                    <LoadingIndicator loadingText={`fetching your posts, please wait...`} />
                    :
                    <section className={ styles.home }>
                        <h3 className={ styles['home__header-text']}>All your hot posts in one place...</h3>
                        <p className={ styles['home__posts-count']}>Showing { posts.length } posts</p>

                        <div className={ styles['home__posts-grid']}>
                            { renderedPosts }
                        </div>
                    </section>
            }
        </main>
    )
}





export default Home