import { FiBook } from "react-icons/fi";

const Home = () => {
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
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=1" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, exercitationem? Quas dolores enim commodi mollitia nesciunt vel sit veritatis!</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img src="https://placehold.co/600x400" alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?" />
                                </div>
                            </div>
                            <div className="flex justify-evenly gap-4">
                                <FiBook />
                                <span>Jan 27, 2026</span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>4.0k</span>
                                </span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>400</span>
                                </span>
                                <FiBook />
                                <FiBook />
                                <FiBook />
                            </div>
                        </div>
                    </article>
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=2" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, exercitationem? Quas dolores enim commodi mollitia nesciunt vel sit veritatis!</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img src="https://placehold.co/600x400" alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?" />
                                </div>
                            </div>
                            <div className="flex justify-evenly gap-4">
                                <FiBook />
                                <span>Jan 27, 2026</span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>4.0k</span>
                                </span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>400</span>
                                </span>
                                <FiBook />
                                <FiBook />
                                <FiBook />
                            </div>
                        </div>
                    </article>
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=4" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, exercitationem? Quas dolores enim commodi mollitia nesciunt vel sit veritatis!</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img src="https://placehold.co/600x400" alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?" />
                                </div>
                            </div>
                            <div className="flex justify-evenly gap-4">
                                <FiBook />
                                <span>Jan 27, 2026</span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>4.0k</span>
                                </span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>400</span>
                                </span>
                                <FiBook />
                                <FiBook />
                                <FiBook />
                            </div>
                        </div>
                    </article>
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=6" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, exercitationem? Quas dolores enim commodi mollitia nesciunt vel sit veritatis!</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <img src="https://placehold.co/600x400" alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?" />
                                </div>
                            </div>
                            <div className="flex justify-evenly gap-4">
                                <FiBook />
                                <span>Jan 27, 2026</span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>4.0k</span>
                                </span>
                                <span className="flex gap-4">
                                    <FiBook />
                                    <span>400</span>
                                </span>
                                <FiBook />
                                <FiBook />
                                <FiBook />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <aside className="flex-1 justify-self-start p-4 flex flex-col rounded">
                <div className="bg-white flex flex-col gap-4">
                    <span className="text-l p-4">
                        Staff Picks
                    </span>
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=7" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <span className="text-xs">1d ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=9" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <span className="text-xs">1d ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white p-4 rounded">
                        <div className="container flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 overflow-hidden rounded-full bg-blue-400 flex justify-center">
                                    <img src="https://i.pravatar.cc/40?img=10" alt="Profile_Picture" />
                                </div>
                                <span>Author Name</span>
                                <div className=" bg-blue-400 w-6 h-6 flex items-center justify-center overflow-hidden rounded-full">
                                    <FiBook />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laborum?</h2>
                                    <span className="text-xs">1d ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="bg-white flex flex-col gap-4">
                    <span className="text-l p-4">
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