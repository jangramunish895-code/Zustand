import React from 'react'
import usePersistStore from '../store/persiststore';

export default function PersistPage() {

const count=usePersistStore((state)=>state.count);
const increase=usePersistStore((state)=>state.increase);
const decrease=usePersistStore((state)=>state.decrease);

  return (
    <div className='box'>
          <h1> Persisted Counter</h1>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
         <p style={{ color: "green" }}>
        ℹ️ Open Inspect → Application → Local Storage to see persisted data
      </p>
    </div>
  )
}
