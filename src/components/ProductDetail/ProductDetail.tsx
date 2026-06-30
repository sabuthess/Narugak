import Image from "next/image";

export const ProductDetail = () => {
  return (
    <div className="flex-col gap-5 border-l border-neutral-300 w-95 flex px-5 pt-5">
      {/* Título */}
      <div>
        <h2 className="text-3xl font-semibold ">Detail Product</h2>
        <p className="text-neutral-500">Legendary Style, All-Day Comfort</p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Imagen principal */}
        <div className="relative h-80 ">
          <Image
            src="/img-example-3.webp"
            alt=""
            fill
            loading="eager"
            sizes="80px"
            className="object-contain"
          />
        </div>

        {/* Galería */}
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-20 ">
              <Image
                src="/img-example-3.webp"
                alt=""
                fill
                loading="eager"
                sizes="80px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nombre y precio */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold ">Womens Air Peg 2K35</h3>

          <div className="flex gap-2 mt-3">
            <span className="px-3  border border-neutral-300 py-2 rounded-md hover:border-blue-500 text-sm cursor-pointer">
              Sport
            </span>

            <span className="px-3  border border-neutral-300 py-2 rounded-md hover:border-blue-500 text-sm cursor-pointer">
              Casual
            </span>
          </div>
        </div>

        <span className="text-3xl font-bold">$146</span>
      </div>

      {/* Colores */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="font-medium text-neutral-400">COLOR:</span>
          <span className="text-sm text-green-600">Available</span>
        </div>

        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-full bg-stone-400 border-2 border-neutral-300" />
          <button className="w-8 h-8 rounded-full bg-blue-400 border-2 border-neutral-300" />
        </div>
      </div>

      {/* Tallas */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-neutral-400">
            SIZE: US 8{" "}
            <span className="text-sm text-neutral-500 ">(Only One Left)</span>
          </span>

          <button className="text-sm text-blue-500">Size Chart</button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"].map((size) => (
            <button
              key={size}
              className="border border-neutral-300 py-2  rounded-md hover:border-blue-500"
            >
              US {size}
            </button>
          ))}
        </div>
      </div>

      {/* Acciones */}
      <button className="bg-blue-600 text-white p-3 rounded-lg">
        Add to cart
      </button>
    </div>
  );
};
