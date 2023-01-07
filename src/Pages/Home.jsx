import { Link } from "react-router-dom"
import './Home.scss'

function Home() {
    return (
        <section className="homeContainer" >

            <article className="firstHomeArtticle">
            </article>

            <article className="secondHomeArtticle">
                <h1>Welcome to my <br /> simpe Blog</h1>
                <button><Link className="linkHome" to='/blog'>Go to Articles</Link></button>
            </article>
        </section>
    )
}

export default Home
