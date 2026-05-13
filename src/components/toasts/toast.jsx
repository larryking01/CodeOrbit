import styles from './toast.module.scss';
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';

import { selectToastType, selectToastTitle, selectToastContent } from '../../store/features/toast/toast.selectors';












const Toast = () => {

    const type = useSelector( selectToastType )

    const title = useSelector( selectToastTitle )

    const content = useSelector( selectToastContent )

    

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