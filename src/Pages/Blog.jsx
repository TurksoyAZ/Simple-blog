
import { blogData } from '../Components/Data/Data'
import { Link } from 'react-router-dom'
import './Blog.scss'

function Blog() {
    return (
        <section className='blogContainer'>

            {blogData.map((parametr, index) => {
                return (
                    <div className='blogDivs' key={index}>
                        <img src={parametr.img_url} alt="" />
                        <h2>{parametr.title}</h2>
                        <button> <Link className='linkBlog' to={`/moreRead/${parametr.id}`}>Read more...</Link></button>
                    </div>
                )
            })}

        </section>
    )
}

export default Blog
