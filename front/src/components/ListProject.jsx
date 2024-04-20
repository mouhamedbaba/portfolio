import { Clock9, EllipsisVertical } from 'lucide-react'
import React from 'react'

export const ListProject = ({project}) => {
  return (
    <div className='py-4 px-2 flex justify-between hover:bg-blue-800'>
        <div className='flex justify-center items-center gap-2'>
        <Clock9 className='text-blue-400' />
        <h4 className='text-lg font-semibold' >{ project.name }</h4>
        </div>
        <div className='flex gap-6 item-center'>
            <div className='flex gap-2 items-center'>
                <div className='h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse'></div>
                <p className='text-sm' >{ project.type }</p>
            </div>
            <h3>Project deadline</h3>
          <EllipsisVertical className="cursor-pointer" />
        </div>
    </div>
  )
}
