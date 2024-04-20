"use client"

import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { CardProject } from '../CardProject'
import clsx from 'clsx'


export const FavoriteProject = () => {

    const [collapse, setCollapse] = useState(true)
    const [recentProject, setRecentProject] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const rpt = [
      {
        'id' : 1,
        'name' : 'golio',
        'type' : 'site',
        'status' : 'Done',
        'is_online' : true
      },
      {
        'id' : 2,
        'name' : 'Gestion file',
        'type' : 'site',
        'status' : 'Pocessing',
        'is_online' : true
      },
      {
        'id' : 3,
        'name' : 'FarmaLab',
        'type' : 'site',
        'status' : 'Pending',
        'is_online' : false
      },
      {
        'id' : 4,
        'name' : 'Organicik',
        'type' : 'site',
        'status' : 'Done',
        'is_online' : true
      },
    ]

    useEffect(() => {
      setRecentProject(rpt)
      setIsLoading(false)
      return () => {
        
      };
    }, []);


  return (
    <section className='overflow-hidden p-2'>
      <div className="border-b pb-4 border-slate-300">
        <div className='flex flex-wrap items-center  justify-between'>
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
          <h3 className="font-bold text-slate-300">Projets Favoris</h3>
        </div>
        <a href="#" className='text-sm font-semibold hover:opacity-85'>Voir tous</a>
        </div>
      </div>
      {
        isLoading && (
          <div className='flex justify-center items-center h-28 w-full'>
            <div className='h-10 w-10  border-4 border-b-slate-500 animate-spin rounded-full '></div>
          </div>
        )
      }
        <div className={clsx(collapse ?  'grid' : 'hidden', 'mt-4 grid-col-1  md:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4 ')} >
        {
          recentProject.map((project)=>{
            return(
              <CardProject key={project.id} project={project} />
            )
          })
        }
        </div>
    </section>
  )
}
