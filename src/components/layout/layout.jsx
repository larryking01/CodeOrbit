import './layout.css'
import { Outlet } from "react-router-dom"

import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"







const Layout = () => {


    
    return (
        <main className="layout">
            <Sidebar />

            <section className='content'>
                <Navbar />
                <div className="outlet-content">
                    <Outlet />
                </div>
            </section>

        </main>
    )
}





export default Layout