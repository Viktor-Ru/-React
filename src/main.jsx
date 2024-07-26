import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {<Header />}
    {<Content />}
  </React.StrictMode>,
)
