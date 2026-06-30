import { CartItem } from "@/app/cart/_components/CartItem/CartItem";
import { OrderSummary } from "@/app/cart/_components/OrderSummary/OrderSummary";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Slim Fit Camera",
      sku: "VG-STCBU2K/ZA",
      price: 99.99,
      image: "/img-example-3.webp",
      delivery: "Mar 6",
    },
    {
      id: 2,
      name: "JBL Authentics 300",
      sku: "JBLAUTH300BLKAM",
      price: 299.95,
      oldPrice: 449.95,
      image: "/img-example-3.webp",
      delivery: "Mar 4",
    },
    {
      id: 3,
      name: "JBL Authentics 300",
      sku: "JBLAUTH300BLKAM",
      price: 299.95,
      oldPrice: 449.95,
      image: "/img-example-3.webp",
      delivery: "Mar 4",
    },
   
  ];

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl ">
        <h1 className="mb-6 text-4xl font-bold">Carito de compras</h1>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="max-h-[60vh] space-y-4 overflow-y-auto">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                image={item.image}
                sku={item.sku}
                delivery={item.delivery}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
          </div>

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
