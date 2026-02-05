import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Admin from './pages/Admin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Article from './pages/Article'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/article/:username/:slug",
    element: <Article />
  },
  {
    path: "/admin",
    element: <Admin />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
