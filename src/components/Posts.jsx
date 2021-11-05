import React from 'react'
import '../styles/posts.scss'

const Posts = ({ post }) => {
    return (
        <div id="component-posts">
            <main>
                <h2>{post.title}</h2>
                <h5>{post.category}</h5>
                <p>{post.details}</p>
            </main>
        </div>
    )
}

export default Posts