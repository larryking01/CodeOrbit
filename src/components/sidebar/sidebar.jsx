import './sidebar.scss'
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiInboxIn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelp } from "react-icons/io5";





const Sidebar = () => {



    return (
        <main className="sidebar">
            <section className="app-brand">
                <Link className="link" to="/">                
                    <h3>DevConnect</h3>
                </Link>   
                <hr />         
            </section>

            <section className="navigation">
                <Link className="link" to="new-post">
                    <div className="nav-item">
                        <IoAddCircleOutline size={ 20 } />               
                        <p className="nav-title">Create Post</p>
                    </div>
                </Link>

                
                <Link className="link" to="/">
                    <div className="nav-item">
                        <IoMdTrendingUp size={ 20 } />               
                        <p className="nav-title">Trending</p>
                    </div>
                </Link>

                <div className="nav-item">
                    <TiMessages size={ 20 } />               
                    <p className="nav-title">Your Posts</p>
                </div>

                <div className="nav-item">
                    <CiInboxIn size={ 20 } />               
                    <p className="nav-title">Inbox</p>
                </div>

                <div className="nav-item">
                    <IoSettingsOutline size={ 20 } />               
                    <p className="nav-title">Settings</p>
                </div>
                <div className="nav-item">
                    <IoHelp size={ 20 } />               
                    <p className="nav-title">Help</p>
                </div>
            </section>

        </main>
    )
}



export default Sidebar