import React from 'react'
import ContextProvider from './context/Context'
import Entry from './pages/Entry'

function App() {
  return (
    <ContextProvider>
    <Entry/>
    </ContextProvider>
  )
}

export default App

