import React from 'react'
import usestore from '../store/usestore'

export default function CounterPage() {

     const count=usestore((state)=>state.count);
     const increase=usestore((state)=>state.increase);
     const decrease=usestore((state)=>state.decrease);
     const double=usestore((state)=>state.double);
     const tripple=usestore((state)=>state.tripple);

  return (
 
      <div className='box'>
        <h1>Counter Working</h1>  
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={double}>Double</button>
        <button onClick={tripple}>Tripple</button>
    
   
    </div>
  )
}
