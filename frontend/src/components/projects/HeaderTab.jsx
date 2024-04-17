'use client'

import { useProjectDisplay } from "@/hooks/useProjectDisplay";
import clsx from "clsx";
import {
  FolderGit,
  LayoutGrid,
  List,
} from "lucide-react";
import React from "react";
import { AddProjectButton } from "../includes/AddProjectButton";
import { CategoriesButton } from "../includes/StatusButton";

export const HeaderTab = () => {

  const {display, setDisplay} = useProjectDisplay()


  


  return (
    <div className="flex gap-2">
      <form className="flex items-center  mx-auto grow">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FolderGit />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 py-3   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rechercher un projet..."
            required
          />
        </div>
        {/* <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SearchIcon size={20} />
          <span className="sr-only">Search</span>
        </button> */}
      </form>
        <CategoriesButton />

      <div className="flex justify-between items-center gap-1 dark:bg-secondary px-3 py-2  outline-none border dark:border-gray-600 rounded-lg">
        <button className={clsx("h-full w-full px-2 rounded-sm" ,display == 'list' ? 'dark:bg-blue-500' : 'dark:hover:bg-primary')}
        onClick={(e)=>{
          setDisplay("list")
        }}
        >
          <List size={20} />
        </button>
        <button className={clsx("h-full w-full px-2 rounded-sm", display == 'grid' ? 'dark:bg-blue-500' : 'dark:hover:bg-primary')}
        onClick={(e)=>{
          setDisplay("grid")
        }}
        >
          <LayoutGrid size={20} />
        </button>
      </div>
      <AddProjectButton />
    </div>
  );
};
