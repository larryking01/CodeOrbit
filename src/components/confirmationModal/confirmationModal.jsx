import styles from './confirmationModal.module.scss'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDeletePostMutation } from '../../store/features/api/apiSlice';
import { showToast, clearToast } from '../../store/features/toast/toast.sclice';
import { clearModal } from '../../store/features/modal/modal.slice';
import { selectEntityId, 
         selectModalType, 
         selectModalTitle, 
         selectModalContent,
         selectModalConfirmButtonText, 
         selectModalCancelButtonText
         } from '../../store/features/modal/modal.selectors';










const ConfirmationModal = () => {


    const dispatch = useDispatch()

    const entityId = useSelector( selectEntityId )

    const navigate = useNavigate()

    const [triggerDeletePostMutation] = useDeletePostMutation()

    const type = useSelector( selectModalType )

    const title = useSelector( selectModalTitle )

    const content = useSelector( selectModalContent )

    const confirmButtonText = useSelector( selectModalConfirmButtonText )

    const cancelButtonText = useSelector( selectModalCancelButtonText )


    
    const handleCancelAction = () => {
        dispatch(clearModal())
    }


    const handleConfirmAction = async () => {

        try {
            if( type === 'DELETE') {
                await triggerDeletePostMutation(entityId)

                dispatch(showToast({
                    type: 'success',
                    title: 'Post deleted 🎉',
                    content: 'Your post has been removed and is no longer visible.'
                }))

                navigate('/')
            }
        }
        catch(error) {
            dispatch(showToast({
                type: 'error',
                title: 'Failed to delete post',
                content: 'We couldn’t delete your post right now. Please try again.'
            }))
        }
        finally {
            dispatch(clearModal())

            setTimeout(() => {
                dispatch(clearToast())
            }, 4000)
        }
    }




    return (
        <main className={ styles.modal }>
            <article className={ styles.modal__container }>
                <section className={ styles.modal__header }>
                    <p>{ title }</p>

                    <IoMdClose size={ 22 } className={ styles.modal__closeIcon } onClick={ handleCancelAction } />
                </section>

                <section className={ styles.modal__content }>
                    <p>{ content }</p>
                </section>

                <section className={ styles.modal__actions }>
                    <button type='button' className={ styles['modal__button--yes']} onClick={ handleConfirmAction }>
                        { confirmButtonText }
                    </button>
                    <button type='button' className={ styles['modal__button--no']} onClick={ handleCancelAction }>
                        { cancelButtonText }
                    </button>
                </section>
            </article>
        </main>
    )
}




export default ConfirmationModal