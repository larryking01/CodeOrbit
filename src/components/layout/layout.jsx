import styles from './layout.module.scss'
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'

import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import Toast from '../toasts/toast'

import { selectToastVisibility } from '../../store/features/toast/toast.selectors'








const Layout = () => {


    let visible = useSelector( selectToastVisibility )


    
    return (
        <main className={ styles.layout }>
            <Sidebar />

            <section className={ styles.layout__content}>
                <Navbar />
                <div className={ styles['layout__outlet-content']}>
                    <Outlet />
                </div>
            </section>

            { visible && <Toast /> }

        </main>
    )
}





export default Layout