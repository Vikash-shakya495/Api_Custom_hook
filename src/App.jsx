import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading';

function App() { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const getData = (newData) => {
    setData(newData)
    setLoading(false);
    
  } 
  
  const isError= () => {
    setError(true);
    setLoading(false);
  }
  useFetch('url', getData, isError);

  if(loading) return <Loading /> ;
  if(error) return <div className='bg-black text-white text-6xl w-screen h-screen flex justify-center items-center '><h3>Error: Failed to Fetch</h3></div>

  return (
  <div className="w-full bg-slate-900 h-screen flex flex-wrap ">
    <div className='flex w-full h-20 text-2xl bg-slate-600 text-white justify-center items-center'>
      <h1>Photos</h1>
    </div>
    <div className='w-full h-5/6 flex flex-wrap justify-between gap-10 overflow-auto p-10'>
      {
          data.map((item, index) => (
            index < 40 ? 
          (<div key={index} className='p-4 h-64 w-64 rounded-md border-2 border-solid border-orange-400'>

            <img className='h-full w-full' src={item} alt="" />
          </div>) : null
      ))
      }
    </div>
  </div>
  )
}

export default App;