import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'
import { ToolTips } from './components/Tooltips'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <ToolTips />
      </BrowserRouter>
    </div>
  )
}

export default App
