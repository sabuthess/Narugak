import { PlusIcon } from "lucide-react";

export const ButtonShowMore = () => {
  return (
    <button className="group flex items-center rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:px-4 hover:bg-blue-700">
      <PlusIcon className="size-6 text-white" />

      <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-32 group-hover:opacity-100">
        Ver más
      </span>
    </button>
  );
};
