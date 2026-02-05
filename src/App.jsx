import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ambilData from "./lib/ambilData"

function App() {
    React.useEffect(
        () => {
            if(window.localStorage.getItem('articles') == null){
                ambilData('/src/assets/data/article.json').then(data => { window.localStorage.setItem('articles', JSON.stringify(data)) })
            }
        }, []
    )
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Home />
            </main>
            <footer></footer>
        </>
    )
}

export default App
