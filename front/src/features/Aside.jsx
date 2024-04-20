"use client";

import clsx from "clsx";
import { FolderGit2, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Aside = () => {

  const pages = [
    {
      'path' : '/',
      'name' : 'Home',
      'icon' : <Home size={20} />
    },
    {
      'path' : '/projects',
      'name' : 'Projets',
      'icon' : <FolderGit2 size={20} />
    }
  ]

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-48 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-secondary dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-secondary">
        <ul className="space-y-2 font-medium mt-4">
          {
            pages.map((page)=>{
              return (
                <AsideLink key={page.name} page={page} />
              )
            })
          }
        </ul>
      </div>
    </aside>
  );
};

const AsideLink = ({page}) => {
  const pathname = usePathname();
  let pp = page.path
  return (
    <li>
      <Link
        href={page.path}
        className={clsx(
          "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group",
          pathname == pp ? "bg-blue-500 dark:hover:bg-blue-500" : 'dark:hover:bg-primary'
        )}
      >
        { page.icon }
        <span className="ms-3">{page?.name}</span>
      </Link>
    </li>
  );
};
