import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Initialize theme from localStorage, default to 'light'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' || saved === 'light' ? saved : 'light'
  })

  // Whenever theme changes, persist it and apply to the document element
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Ensure the attribute is set on first load as well (in case HTML loaded before React runs)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <h1>Student Theme Preference</h1>
      <div className="card">
        <p>Current theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </div>
      <p className="read-the-docs">
        Your choice is saved. Reload the page to see it persist.
      </p>
    </>
  )
}

export default App
