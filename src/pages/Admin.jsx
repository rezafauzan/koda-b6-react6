import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar"
import React from "react"
import moment from "moment"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    const { register, handleSubmit } = useForm()
    const [articles, setArticles] = React.useState(null)
    
    return (
        <>
            <header><Navbar /></header>
            <main>
                <section>
                    <div className="container w-3xl bg-white shadow border border-black/40 rounded mx-auto flex flex-col p-4 mt-4">
                        <div className="section-header flex flex-col gap-4 py-4">
                            <h1 className="text-xl font-bold text-center">Admin Page</h1>
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