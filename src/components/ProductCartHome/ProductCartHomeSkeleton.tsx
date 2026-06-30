import React from "react";

export const ProductCartHomeSkeleton = () => {
  return (
    <div className="w-65  bg-neutral-50 dark:bg-neutral-800 rounded-lg animate-pulse ">
      {/* Imagen */}
      <div className="bg-neutral-200 dark:bg-neutral-600 p-4 w-full  h-50"></div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 bg-neutral-200 dark:bg-neutral-700 px-2 py-4"></h3>

        <div className="mt-2 flex justify-between text-xs text-gray-500 bg-neutral-200 px-4 dark:bg-neutral-700 py-2"></div>
        <div className="mt-2 flex justify-between text-xs text-gray-500 bg-neutral-200 px-4 dark:bg-neutral-700 py-2"></div>
        <div className="mt-2 flex justify-between text-xs text-gray-500 bg-neutral-200 px-4 dark:bg-neutral-700 py-2"></div>

        <div className="mt-4 flex items-end justify-between">
          <div className="flex gap-2 flex-col">
            <p className="text-xs  bg-neutral-200 dark:bg-neutral-700 py-2 px-8"></p>
            <p className="bg-neutral-200 dark:bg-neutral-700 py-2 px-10"></p>
          </div>

          <button className="bg-neutral-200 dark:bg-neutral-700 py-4 px-10 "></button>
        </div>
      </div>
    </div>
  );
};
