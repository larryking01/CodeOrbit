import styles from './layout.module.scss'
import { Outlet } from "react-router-dom"

import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"







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

        </main>
    )
}





export default Layout