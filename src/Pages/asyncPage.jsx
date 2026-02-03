import React from 'react'
import useAsyncStore from '../store/asyncStore'

const AsyncPage = () => {
    const { count , increment} = useAsyncStore()
  return (
    <div className='box'>
        <h1>This is an async page</h1>
        <p>Content will be loaded asynchronously.</p>
        
        <h1>{count}</h1>
        <br />
        <button onClick={increment}>Increment Async Count</button>



      
    </div>
  )
}

export default AsyncPage
