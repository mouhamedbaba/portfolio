import { Ban, EllipsisVertical } from "lucide-react";
import React from "react";

export const CardProject = ({project}) => {


  return (
    <div className="border border-gray-500 rounded-md overflow-hidden  hover:[transform:scale(1.01) [&_div]:hover:bg-blue-800">
      <div className="w-full bg-red h-28">
      </div>
    
      <div className="p-4 rounded-t-3xl bg-secondary -mt-4 d2">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-full bg-slate-50 animate-pulse"></div>
          <EllipsisVertical className="cursor-pointer" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">{project.name}</h3>
          <p className="text-sm">{project.type}</p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
            <div className="flex justify-between">
                <h6>Status</h6>
                <p>{project.status}</p>
            </div>
            <div className="flex  justify-between">
                <h6>En ligne</h6>
                <Ban />
            </div>
        </div>
      </div>
      
    </div>
  );
};
