import './empty.scss'
import { PiEmptyLight } from "react-icons/pi";









const EmptyState = ({ title = "No Content Available", description = "There’s nothing to display here right now. New content will appear once it becomes available." }) => {


  return (
    <main class="empty-state-container fade-in">
        <article class="empty-card">
            <section class="circle-accent">
                <PiEmptyLight />
            </section>

            <section>
                <h2 class="empty-title">{title}</h2>
                <p class="empty-description">{description}</p>
            </section>
        </article>
    </main>
  );
}



export default EmptyState