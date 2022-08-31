import React from 'react'

function Todoinput({onChange , state , onClick}) {
  return (
    <form className='flex justify-center mt-10' onSubmit={e=> e.preventDefault()}>
        <input value={state.todo} onChange={onChange} className='border-2 border-zinc-900 rounded mr-2 p-1 px-2 focus:shadow-lg focus:shadow-violet-300' placeholder='Bugün ne yapsam?'></input>
        <button className='bg-gray-300 hover:bg-violet-800 hover:text-gray-200 p-2 rounded-full' onClick={onClick}>Add Todo</button>
    </form>
  )
}

export default Todoinput