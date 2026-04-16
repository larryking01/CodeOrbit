import styles from './sidebar.module.scss'
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiInboxIn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelp } from "react-icons/io5";







const Sidebar = () => {



    return (
        <main className={styles.sidebar}>
            <section className={styles.sidebar__brand}>
                <Link className="link" to="/">
                <h3 className={styles.sidebar__brandTitle}>DevConnect</h3>
                </Link>
                <hr />
            </section>

            <section className={styles.sidebar__navigation}>
                <Link className="link" to="new-post">
                <div className={styles.sidebar__navItem}>
                    <IoAddCircleOutline size={20} />
                    <p className={styles.sidebar__navTitle}>Create Post</p>
                </div>
                </Link>

                <Link className="link" to="/">
                <div className={styles.sidebar__navItem}>
                    <IoMdTrendingUp size={20} />
                    <p className={styles.sidebar__navTitle}>Trending</p>
                </div>
                </Link>

                <div className={styles.sidebar__navItem}>
                <TiMessages size={20} />
                <p className={styles.sidebar__navTitle}>Your Posts</p>
                </div>

                <div className={styles.sidebar__navItem}>
                <CiInboxIn size={20} />
                <p className={styles.sidebar__navTitle}>Inbox</p>
                </div>

                <div className={styles.sidebar__navItem}>
                <IoSettingsOutline size={20} />
                <p className={styles.sidebar__navTitle}>Settings</p>
                </div>

                <div className={styles.sidebar__navItem}>
                <IoHelp size={20} />
                <p className={styles.sidebar__navTitle}>Help</p>
                </div>
            </section>
        </main>
    )
}



export default Sidebar