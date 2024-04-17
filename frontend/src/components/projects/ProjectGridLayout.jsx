"use client";

import React from "react";
import { CardProject } from "../CardProject";
import { rpt } from "@/constants";
import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";

export const ProjectGridLayout = ({ display }) => {
  return (
    <div>
      {display == "grid" ? (
        <div
          className={clsx(
            display == "grid" ? "grid" : "hidden",
            "mt-4 grid-col-1  md:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4 "
          )}
        >
          {rpt.map((project) => {
            return <CardProject key={project.id} project={project} />;
          })}
        </div>
      ) : (
        <div className="bg-secondary border border-gray-700 mt-4">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {rpt.map((project) => {
              return (
                <li className="p-3 sm:p-4" key={project.id}>
                  <div className="flex items-center  justify-between space-x-4 rtl:space-x-reverse">
                    <div className="flex gap-2">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-1.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {project.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {project.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <p>Processing</p>
                      <EllipsisVertical />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
