import styles from './empty.module.scss'
import { PiEmptyLight } from "react-icons/pi";









const EmptyState = ({ title = "No Content Available", description = "There’s nothing to display here right now. New content will appear once it becomes available." }) => {



  return (
    <main className={`${styles.empty} ${styles.fadeIn}`}>
        <article className={styles.empty__card}>
            <section className={styles.empty__iconWrapper}>
                <PiEmptyLight />
            </section>

            <section className={styles.empty__content}>
                <h2 className={styles.empty__title}>{title}</h2>
                <p className={styles.empty__description}>{description}</p>
            </section>
        </article>
    </main>    
   );
}



export default EmptyState