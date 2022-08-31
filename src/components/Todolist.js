import React from 'react'

function Todolist({state}) {
  return (
    <div className='w-1/4 mx-auto my-10 p-4 bg-transparent rounded-lg shadow-lg shadow-violet-300'>
        <ul className='list-none'>
            {
                state.map((todo, idx) => {
                    return(
                        <li className='bg-indigo-300 my-4 rounded-lg overflow-hidden p-2 font-semibold text-center'>{todo}</li>
                    )

                })

            }

        </ul>
    </div>
  )
}

export default Todolist