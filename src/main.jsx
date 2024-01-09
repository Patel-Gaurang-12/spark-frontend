import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/joy'
import themes from "./theme/theme.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { CookiesProvider } from 'react-cookie'

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <QueryClientProvider client={query}>
        {/* <CookiesProvider defaultSetOptions={{ path: "/" }}> */}
          <App />
        {/* </CookiesProvider> */}
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
