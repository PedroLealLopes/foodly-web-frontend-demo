import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({img, alt, article:{author, title, content}}) => {
  return (
        <div className='article-container'>
            <img src={img} alt={alt}/>
            <div className="article-body">
              <div className="article-author">  
                {author}
              </div>
                  <h4>
                    <Link to='/restaurants'>
                      {title}
                    </Link>
                  </h4>
              <p>
                {content}
              </p>
            </div>
        </div>
  )
}

export default Article
