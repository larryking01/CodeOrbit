import './navbar.scss'
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";






const Navbar = () => {





    return (
        <nav>
            <div className="nav-display">
                <h3>Create Post</h3>
            </div>

            <div className="user-profile">
                <div className="icon-container">
                    <IoIosNotificationsOutline size={ 20 } />
                </div>

                <div className="icon-container">
                    <IoChatbubbleEllipsesOutline size={ 20 } />
                </div>

                <div className="picture-container">
                    <img src='https://i.pravatar.cc/150?img=11' />
                </div>

                <div className="user-info-container">
                    <h3>Larry Williams</h3>
                    <p>Software Developer</p>
                </div>

                <div className="icon-container">
                    <IoIosArrowDown size={ 20 } />
                </div>
            </div>
        </nav>
    )
}




export default Navbar