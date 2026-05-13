import styles from './confirmationModal.module.scss'
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';

import { clearModal } from '../../store/features/modal/modal.slice';











const ConfirmationModal = () => {


    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(clearModal())
    }

    const handleConfirmAction = () => {
        dispatch(clearModal())
    }

    const handleCancelAction = () => {
        dispatch(clearModal())
    }


    return (
        <main className={ styles.modal }>
            <article className={ styles.modal__container }>
                <section className={ styles.modal__header }>
                    <p>Delete Post?</p>

                    <IoMdClose size={ 22 } className={ styles.modal__closeIcon } onClick={ closeModal } />
                </section>

                <section className={ styles.modal__content }>
                    <p>Are you sure you want to delete this post? This action cannot be undone.</p>
                </section>

                <section className={ styles.modal__actions }>
                    <button type='button' className={ styles['modal__button--yes']} onClick={ handleConfirmAction }>
                        Yes, delete
                    </button>
                    <button type='button' className={ styles['modal__button--no']} onClick={ handleCancelAction }>
                        No, cancel
                    </button>
                </section>
            </article>
        </main>
    )
}




export default ConfirmationModal