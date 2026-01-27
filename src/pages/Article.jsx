import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import ambilData from "../lib/ambilData"
import React from "react"

function filterByUsername(articles = [], username = ''){
    return articles.filter(article=> article.author.username === username)
}

function findBySlug(articles = [], slug = ''){
    return articles.find(article => article.slug === slug)
}


function findArticle(articles = [], slug = '', authorUsername = ''){
    const postsByUsername = filterByUsername(articles, authorUsername)
    return findBySlug(postsByUsername, slug)
}

const Article = () => {
    const [articles, setArticles] = React.useState([])
    const {username,slug} = useParams()
    React.useEffect(
        () => {
            ambilData('/src/assets/data/article.json').then(data => setArticles(findArticle(data, slug, username)))
        }, []
    )
    return (
        <>
            <header><Navbar /></header>
            <main>
                <section>
                    <div className="container w-3xl bg-white shadow border border-black/40 rounded mx-auto flex flex-col">
                        <div className="section-header flex flex-col gap-4"></div>
                        <div className="section-body flex flex-col gap-4"></div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Article