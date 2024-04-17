import React from 'react'

export const DropdownMenuList = ({droplists}) => {


    if (!droplists){
        return 
    }

  return (

    <div className='mt-3 w-full rounded-lg p-2 absolute dark:bg-black border border-gray-500'>
        <ul>
            {
                droplists?.map((droplist)=>{
                    return(
                    <li className='p-2 dark:hover:bg-gray-500 rounded text-sm cursor-pointer truncate' key={droplist.id}>
                        <a className='' href='/'>{ droplist.name }</a>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
