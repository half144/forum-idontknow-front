import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './context/AuthContext'
import GlobalStyle from './globalStyles'
import Router from './routes'
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      staleTime: 60000
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
