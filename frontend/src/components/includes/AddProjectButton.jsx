import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { DropdownMenuList } from '../DropdownMenuList'

export const AddProjectButton = () => {

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
    <div className="relative">
    <button className="dark:bg-gray-50 h-full rounded-lg  px-3 flex gap-4 items-center justify-between hover:opacity-80"
    onClick={(e) =>{
        setCollapse(!collapse)
    }}
    >
      <span className=" max-w-24 dark:text-black font-bold truncate">
          add a new ...
      </span>
      <ChevronDown size={20} className="text-black"/>
    </button>
    {
        collapse && <DropdownMenuList droplists={actions} />
    }
      </div>
  )
}
