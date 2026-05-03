import styles from './toast.module.scss';
import { AiOutlineClose } from "react-icons/ai";









const Toast = ({ type, title, content }) => {

    

    return (
        <main className={`${ styles.toast } ${ styles[`toast--${ type }`] }`}>
            <section className={ styles.toast__header }>
                <p>{ title }</p>

                <AiOutlineClose className={ styles.toast__closeIcon } />
            </section>

            <section className={ styles.toast__content }>
                <p>{ content }</p>
            </section>
        </main>
    )

}



export default Toast