import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { DropdownMenuList } from '../DropdownMenuList'

export const CategoriesButton = () => {
  const [collapse, setCollapse] = useState(false)


  const actions = [
      {
          'id' : 1,
          'name' : 'project'
      },
      {
          'id' : 2,
          'name' : 'Experience'
      },
  ]

  return (
    <div className="max-w-sm mx-auto relative">
    <button
        onClick={(e) =>{
          setCollapse(!collapse)
      }}
      id="countries"
      className="bg-gray-50 font-semibold border flex gap-4 items-center justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-secondary px-3  outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      Status
      <ChevronDown />
    </button>
    {
        collapse && <DropdownMenuList droplists={actions} />
    }
  </div>
  )
}
