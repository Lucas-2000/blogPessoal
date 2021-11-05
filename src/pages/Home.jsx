import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import '../styles/home.scss'

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div id="page-home">
            <Header />
            <main>
                <div className="text-author">
                    <h1>Por Lucas Marchesoni</h1>
                </div>
                {posts.map(post => (
                    <div key={post.id}>
                        <Posts post={post} />
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Home
