import styles from './layout.module.scss'
import { Outlet } from "react-router-dom"

import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import Toast from '../toasts/toast'







const Layout = () => {


    
    
    return (
        <main className={ styles.layout }>
            <Sidebar />

            <section className={ styles.layout__content}>
                <Navbar />
                <div className={ styles['layout__outlet-content']}>
                    <Outlet />
                </div>
            </section>

            <Toast type='success' title='Post created 🎉' content='Your post has been published successfully.'/>

        </main>
    )
}





export default Layout