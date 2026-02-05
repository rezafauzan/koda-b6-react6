import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import ambilData from "../lib/ambilData"
import React from "react"

function filterByUsername(articles = [], username = '') {
    return articles.filter(article => article.author.username === username)
}

function findBySlug(articles = [], slug = '') {
    return articles.find(article => article.slug === slug)
}

function findArticle(articles = [], slug = '', authorUsername = '') {
    const postsByUsername = filterByUsername(articles, authorUsername)
    return findBySlug(postsByUsername, slug)
}

const Article = () => {
    const [article, setArticle] = React.useState(null)
    const { username, slug } = useParams()
    React.useEffect(
        () => {
            const articles = JSON.parse(window.localStorage.getItem("articles")) || null
            setArticle(findArticle(articles, slug, username))
        }
        , [article]
    )

    return (
        <>
            <header><Navbar /></header>
            <main>
                <section>
                    <div className="container w-3xl bg-white shadow border border-black/40 rounded mx-auto flex flex-col p-4 mt-4">
                        <div className="section-header flex flex-col gap-4 py-4">
                            {
                                article == null
                                    ?
                                    "Article tidak ditemukan silahkan kembali ke halaman utama"
                                    :
                                    <>
                                        <h1 className="text-center text-2xl font-bold">{(article != null ? article.title : "Loading...")}</h1>
                                        <div className="flex gap-4">
                                            <div className="w-6 h-6 overflow-hidden rounded-full flex justify-center">
                                                {
                                                    (article != null ? <img src={article.author.avatar} alt={article.author.name} /> : "Loading...")
                                                }
                                            </div>
                                            {
                                                (article != null ? <span>{article.author.name}</span> : "Loading...")
                                            }
                                            {
                                                (article != null ? <button className="border rounded-full px-4 cursor-pointer">Follow</button> : "Loading...")
                                            }
                                            {
                                                (article != null ? <span>{article.publishedAt}</span> : "Loading...")
                                            }
                                        </div>
                                    </>
                            }

                        </div>
                        <div className="section-body flex flex-col justify-center items-center">
                            {
                                article == null ? "" :
                                (article != null ? article.content : "Loading...")
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Article