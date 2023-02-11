import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

const App = React.lazy(() => import('./App'))

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
