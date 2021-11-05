import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Header from '../components/Header'
import '../styles/create.scss'

const Create = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title && category && details){
            fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, details, category })
            })
            
        setTitle('')
        setCategory('')
        setDetails('')

        window.alert('Post criado com sucesso')
        }
    }


    return (
        <div id="page-create">
            <Header />
            <main className="main-content">
                <form onSubmit={handleSubmit}>
                    <label>Titulo</label>
                    <input
                        type="text"
                        placeholder="Titulo do post"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    <label>Categoria</label>
                    <input
                        type="text"
                        placeholder="Categoria do post"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                    <label>Detalhes</label>
                    <textarea
                        rows="5"
                        placeholder="Detalhes do post"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)} />
                    <div>
                        <button type="submit">CRIAR POST</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Create
