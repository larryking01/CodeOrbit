import styles from './loadingIndicator.module.scss'







const LoadingIndicator = ({ loadingText }) => {


    return (
        <main className={ styles.loading__modalOverlay }>
            <article className={ styles.loading__modal }>
                <section className={ styles.loading__pulseDivsContainer }>
                        <div className={ styles['loading__pulseDiv--blue'] }></div>

                        <div className={ styles['loading__pulseDiv--red'] }></div>

                        <div className={ styles['loading__pulseDiv--green'] }></div>

                        <div className={ styles['loading__pulseDiv--yellow'] }></div>
                </section>

                <section className={ styles.loading__description }>
                    <p>{ loadingText }</p>
                </section>
            </article>
        </main>
    )
}



export default LoadingIndicator