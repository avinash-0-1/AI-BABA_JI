import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './components/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/chatbot">
  <ContextProvider>
    <App />
  </ContextProvider>
  </BrowserRouter>
)
