import styles from './toast.module.scss';
import { AiOutlineClose } from "react-icons/ai";

import { useSelector } from 'react-redux';
import { selectToastVisibility, selectToastType, selectToastTitle, selectToastContent } from '../../store/features/toast/toast.selectors';

import { useEffect } from 'react';




const Toast = () => {


    const visible = useSelector( selectToastVisibility )

    const type = useSelector( selectToastType )

    const title = useSelector( selectToastTitle )

    const content = useSelector( selectToastContent )


    useEffect(() => {
        console.log("toast visible = ", visible)
        console.log("toast type = ", type)
        console.log("toast title = ", title)
        console.log("toast content = ", content)
        
    },[ visible, title, type, content])

    

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