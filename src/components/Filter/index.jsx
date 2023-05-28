import React from 'react'
import {HiOutlineSortDescending} from 'react-icons/hi'
import {HiOutlineArrowNarrowUp} from 'react-icons/hi'
import {HiOutlineArrowNarrowDown} from 'react-icons/hi'

const Filter = ({onFiltrtHandler}) => {
 
  return (
    <header className="text-gray-600 body-font mr-[59%] mb-6">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start">
      <nav className="flex flex-wrap items-start text-base md:ml-auto">
        <p className="mr-16 hover:text-gray-900 inline-flex justify-center items-center gap-2"><HiOutlineSortDescending className='mt-2'/> Sorting:</p>
        <button onClick={()=>onFiltrtHandler('acc')} className="mr-16 hover:text-gray-900 inline-flex justify-center items-center gap-2"><HiOutlineArrowNarrowUp /> Acending</button>
        <button onClick={()=>onFiltrtHandler('dec')} className="mr-16 hover:text-gray-900 inline-flex justify-center items-center gap-2"><HiOutlineArrowNarrowDown/> Desending</button>
      </nav>
    </div>
  </header>
  )
}

export default Filter
