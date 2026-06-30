import Image from "next/image";

interface ICartItem {
  id?: number;
  name: string;
  image: string;
  sku: string;
  delivery: string;
  price: number;
  oldPrice: number | undefined;
}

export const CartItem = ({
  name,
  image,
  sku,
  delivery,
  price,
  oldPrice,
}: ICartItem) => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex gap-5">
        <Image
          src={image}
          alt={name}
          width={112}
          height={112}
          className="rounded object-cover"
        />

        <div className="flex flex-1 justify-between">
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>

            <p className="text-sm text-gray-500">SKU#{sku}</p>

            <div className="mt-3">
              <select className="rounded border px-2 py-1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
              <span>
                🚚 Delivers to:{" "}
                <span className="font-medium text-blue-600">10001</span>
              </span>

              <span>📅 Get it by {delivery}</span>

              <span>🏬 In-Store pickup not available</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold">${price.toFixed(2)}</div>

            {oldPrice && (
              <div className="text-gray-400 line-through">
                ${oldPrice.toFixed(2)}
              </div>
            )}

            <button className="mt-3 text-sm text-blue-600 hover:underline">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
