import styles from './navbar.module.scss'
import { useSelector } from 'react-redux';


import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { getCurrentUser } from '../../store/features/users/users.selectors';








const Navbar = () => {


    const currentUser = useSelector(getCurrentUser)




    return (

        <nav className={styles.navbar}>
            <div className={styles.navbar__display}>
                <h3 className={styles.navbar__title}>Create Post</h3>
            </div>

            <div className={styles.navbar__profile}>
                <div className={styles.navbar__icon}>
                    <IoIosNotificationsOutline size={20} />
                </div>

                <div className={styles.navbar__icon}>
                    <IoChatbubbleEllipsesOutline size={20} />
                </div>

                <div className={styles.navbar__avatar}>
                    <img src={ currentUser.avatar } />
                </div>

                <div className={styles.navbar__userInfo}>
                    <h3>{ currentUser.name }</h3>
                    <p>{ currentUser.role }</p>
                </div>

                <div className={styles.navbar__icon}>
                    <IoIosArrowDown size={20} />
                </div>
            </div>
        </nav>   
     )
}




export default Navbar