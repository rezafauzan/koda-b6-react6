import { FiBook } from "react-icons/fi"
import ambilData from "../lib/ambilData"
import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [articles, setArticles] = React.useState([])
    React.useEffect(
        () => {
            ambilData('/src/assets/data/article.json').then(data => { setArticles(data) })
        }, []
    )
    return (
        <section className="flex">
            <div className="container flex-3 flex flex-col items-center p-4">
                <div className="section-header flex-1 w-full bg-white shadow">
                    <ul className="flex items-center self-start">
                        <li><button className="p-4 border-b cursor-pointer">For you</button></li>
                        <li><button className="p-4 cursor-pointer">Featured</button></li>
                    </ul>
                </div>
                <div className="section-body flex-1 w-full flex flex-col gap-4">
                    {
                        articles.length > 0 && articles.map(
                            article => {
                                return (
                                    <Link to={`/article/${article.author.username}/${article.slug}`} key={"article-" + article.id}>
                                        <article className="bg-white p-4 rounded">
                                            <div className="container flex flex-col gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                                        <img src={article.author.avatar} alt={article.author.name} />
                                                    </div>
                                                    <span>{article.author.name}</span>
                                                    <div className="bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                                        <FiBook />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center gap-6">
                                                    <div className="flex flex-col gap-4">
                                                        <h2 className="text-2xl font-bold">{article.title}</h2>
                                                        <p>{article.content}</p>
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <img
                                                            src="https://placehold.co/600x400"
                                                            alt={article.title}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex justify-evenly gap-4">
                                                    <FiBook />
                                                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                                    <span className="flex gap-4">
                                                        <FiBook />
                                                        <span>{article.stats.views.toLocaleString()}</span>
                                                    </span>
                                                    <span className="flex gap-4">
                                                        <FiBook />
                                                        <span>{article.stats.likes.toLocaleString()}</span>
                                                    </span>
                                                    <FiBook />
                                                    <FiBook />
                                                    <FiBook />
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <aside className="flex-1 justify-self-start p-4 flex flex-col rounded">
                <div className="bg-white flex flex-col gap-4">
                    <span className="text-l p-4 font-bold">
                        Staff Picks
                    </span>
                    {
                        articles.length > 0 && articles.map(
                            (article, index) => {
                                return (
                                    index < 3 &&
                                    <Link to={`/article/${article.author.username}/${article.slug}`} key={"article-" + article.id}>
                                        <article className="bg-white p-4 rounded">
                                            <div className="container flex flex-col gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                                        <img src={article.author.avatar} alt={article.author.name} />
                                                    </div>
                                                    <span>{article.author.name}</span>
                                                </div>
                                                <div className="flex justify-between items-center gap-6">
                                                    <div className="flex flex-col gap-4">
                                                        <h2 className="font-bold">{article.title}</h2>
                                                        <p className="text-xs">{article.content.slice(0,40)+"..."}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
                <div className="bg-white flex flex-col gap-4">
                    <span className="text-l p-4 font-bold">
                        Recommended topics
                    </span>
                    <ul className="w-full flex flex-wrap items-center gap-6 p-4">
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Politics</span></li>
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Life</span></li>
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Blockchain</span></li>
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Education</span></li>
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Culture</span></li>
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Apple</span></li>
                        <li><span className="w-4 h-2 p-2 bg-slate-100 rounded-full">Mindfulness</span></li>
                    </ul>
                </div>
                <div className="bg-white flex flex-col gap-4">
                    <span className="text-l px-4">
                        Who to follow
                    </span>
                    <div className="w-full flex flex-wrap items-center gap-6 p-4">
                        <div className="w-full flex items-center justify-evenly gap-4">
                            <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                <img src="https://i.pravatar.cc/40?img=14" alt="Profile_Picture" />
                            </div>
                            <div className="flex flex-2 flex-col">
                                <span className="font-bold">Author Name</span>
                                <p>Lorem ipsum</p>
                            </div>
                            <button className="cursor-pointer flex-1 w-4 p-2 bg-slate-100 rounded-full">Follow</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap items-center gap-6 p-4">
                        <div className="w-full flex items-center justify-evenly gap-4">
                            <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                <img src="https://i.pravatar.cc/40?img=10" alt="Profile_Picture" />
                            </div>
                            <div className="flex flex-2 flex-col">
                                <span className="font-bold">Author Name</span>
                                <p>Lorem ipsum</p>
                            </div>
                            <button className="cursor-pointer flex-1 w-4 p-2 bg-slate-100 rounded-full">Follow</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap items-center gap-6 p-4">
                        <div className="w-full flex items-center justify-evenly gap-4">
                            <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                <img src="https://i.pravatar.cc/40?img=11" alt="Profile_Picture" />
                            </div>
                            <div className="flex flex-2 flex-col">
                                <span className="font-bold">Author Name</span>
                                <p>Lorem ipsum</p>
                            </div>
                            <button className="cursor-pointer flex-1 w-4 p-2 bg-slate-100 rounded-full">Follow</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap items-center gap-6 p-4">
                        <div className="w-full flex items-center justify-evenly gap-4">
                            <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                <img src="https://i.pravatar.cc/40?img=15" alt="Profile_Picture" />
                            </div>
                            <div className="flex flex-2 flex-col">
                                <span className="font-bold">Author Name</span>
                                <p>Lorem ipsum</p>
                            </div>
                            <button className="cursor-pointer flex-1 w-4 p-2 bg-slate-100 rounded-full">Follow</button>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    )
}
export default Home