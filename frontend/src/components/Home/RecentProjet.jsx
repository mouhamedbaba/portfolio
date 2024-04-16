"use client"

import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { CardProject } from '../CardProject'
import clsx from 'clsx'

export const RecentProjet = () => {

    const [collapse, setCollapse] = useState(true)



  return (
    <section className='overflow-hidden'>
      <div className="border-b pb-4 border-slate-300">
        <div className="flex items-center gap-4">
        <button className='relative inline-flex'
        onClick={(e)=>{
            setCollapse(!collapse)
        }}
        >
      <ChevronDown
            className={clsx(collapse ? 'scale-100' : 'scale-0')}
            size={30}
            weight="bold"
          />
            <ChevronUp
            className={clsx(collapse ? 'scale-0' : 'scale-100', 'absolute')}
            size={30}
            weight="bold"
          />
        </button>
          <h3 className="text-xl font-bold text-slate-300">Projets Recents</h3>
        </div>
      </div>
        <div className={clsx(collapse ?  'scale-100' : 'scale-0', 'mt-4 grid grid-col-1  md:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4')} >
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject /> 
          <CardProject /> 
        </div>
    </section>
  )
}
