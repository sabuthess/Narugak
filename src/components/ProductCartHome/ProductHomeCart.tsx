import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import { ButtonShowMore } from "../ButtonShowMore/ButtonShowMore";

export const ProductHomeCart = ({ name, description, price }: IProduct) => {
  return (
    <div className="lg:w-65 overflow-hidden border border-neutral-400 bg-white   shadow-sm transition hover:shadow-md">
      {/* Imagen */}
      <div className="relative bg-gray-100 p-4 w-full  h-50">
        <Image
          fill
          src="/img-example-3.webp"
          alt="Nike Air Zoom VTR 3"
          className="h-40 w-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900  max-w-65 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>

        <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-neutral-300">
          <p className="line-clamp-2">{description}</p>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${price}
            </p>
          </div>
          <ButtonShowMore />
        </div>
      </div>
    </div>
  );
};
