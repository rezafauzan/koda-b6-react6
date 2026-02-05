import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar"
import React from "react"
import moment from "moment"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    const { register, handleSubmit } = useForm()
    const [articles, setArticles] = React.useState(null)
    const [modal, setModal] = React.useState("")
    const navigator = useNavigate()

    React.useEffect(
        () => {
            setArticles(JSON.parse(window.localStorage.getItem("articles")) || null)
        }
        , []
    )

    function addArticle(data) {
        const article = {
            "id": articles.length+1,
            "title": data.title,
            "slug": data.title.toLowerCase().replaceAll(" ", "-"),
            "author": {
                "name": "Reza Fauzan",
                "username": "rezafauzan",
                "avatar": "https://i.pravatar.cc/40?img=4"
            },
            "content": data.content,
            "publishedAt": moment().format("DD MMMM YYYY"),
            "stats": {
                "views": 0,
                "likes": 0
            },
            "rating": 0
        }
        articles.push(article)
        window.localStorage.setItem('articles', JSON.stringify(articles))
        setModal("Article added! redirect to homepage in 4 sec")
        setTimeout(
            ()=>{
                navigator("/")
            }, 4000
        )
    }
    return (
        <>
            <header><Navbar /></header>
            <main>
                <section>
                    <div className="container w-3xl bg-white shadow border border-black/40 rounded mx-auto flex flex-col p-4 mt-4">
                        <div className="section-header flex flex-col gap-4 py-4">
                            <h1 className="text-xl font-bold text-center p-4">Admin Page</h1>
                            {
                                (
                                    modal.length > 0 ?
                                    <span className="bg-green-400 border border-green-700 text-green-700">
                                        {modal}
                                    </span>
                                    :
                                    ""
                                )
                            }
                            {
                                (
                                    articles != null
                                        ?
                                        <form className="flex flex-col justify-center gap-4" onSubmit={handleSubmit(addArticle)}>
                                            <label htmlFor="title">Title</label>
                                            <input type="text" {...register("title")} id="title" className="border rounded p-4" placeholder="article title" required minLength={10}/>
                                            <label htmlFor="content">Content</label>
                                            <textarea {...register("content")} id="content" className="border rounded p-4" placeholder="article content" required minLength={10}></textarea>
                                            <button type="submit" className="p-4 bg-black text-white rounded cursor-pointer">Add article</button>
                                        </form>
                                        :
                                        "Loading..."
                                )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Admin