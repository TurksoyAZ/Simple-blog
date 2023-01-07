
import { useParams } from 'react-router-dom'
import { blogData } from '../Data/Data'
import './MehrInfo.scss'

function MehrInfo() {

    const params = useParams()

    return (
        <section className='mehrInfoContainer'>
            <article className='mehrInfoArticle'>
                <div>
                    <img src={blogData[params.id].img_url} alt={blogData[params.id].title} />
                </div>

                <div className='mehrInfoBox'>
                    <div className='items1'>
                        <h2>{blogData[params.id].title}</h2>
                        <p>{blogData[params.id].description}</p>
                        <span>{blogData[params.id].author}</span>
                    </div>

                    <small>{blogData[params.id].published_date}</small>

                </div>

            </article>
        </section>
    )
}

export default MehrInfo
