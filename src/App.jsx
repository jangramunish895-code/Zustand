import './App.css'
import PersistPage from './Pages/PersistPage'
import Counter from './Pages/CounterPage'
import AsyncPage from './Pages/asyncPage'

function App() {
  return (
    
    <>
        <h1>Welcome to Zustand</h1>
          <p>Explore various state management techniques using Zustand.</p>

          <p >this is simple Counter using Counter Store</p>
          <Counter />
          <p> this is Async Data Fetching using Async Store</p>
          <AsyncPage />

          <p> this is Persist Data using Persist Store</p>
          <PersistPage />

    </>
  )
}

export default App
