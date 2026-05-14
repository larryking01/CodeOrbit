import './notFound.scss'
import not_found_4 from '../../assets/images/not_found_4.png'













const NotFoundPage = () => {
    

    return (
        <section className="not-found">
            <div className="not-found__content">
                <div className="not-found__image-wrapper">
                    <img
                        src={ not_found_4 }
                        alt="404 illustration"
                        className="not-found__image"
                    />
                </div>

                <h1 className="not-found__title">Oops! Page not found</h1>

                <p className="not-found__description">
                    The page you’re looking for doesn’t exist or may have been moved.
                    Let’s get you back on track.
                </p>

                <a href="/" className="not-found__button">
                    <span className="not-found__button-icon">⌂</span>
                    Return to Home
                </a>
            </div>
        </section>  
    )
}




export default NotFoundPage