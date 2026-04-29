import styles from './loadingIndicator.module.scss'







const LoadingIndicator = ({ loadingText }) => {

    return (
        <main className={ styles.loading }>
            <article>
                <section className={ styles.loading__modalContent }>
                        <div className={ styles.loading__blueLoader }></div>

                        <div className={ styles.loading__redLoader }></div>

                        <div className={ styles.loading__orangeLoader }></div>

                        <div className={ styles.loading__greenLoader }></div>
                </section>

                <section className={ styles.loading__description }>
                    <p>{ loadingText }</p>
                </section>
            </article>
        </main>
    )
}



export default LoadingIndicator