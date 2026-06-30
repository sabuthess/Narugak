export const OrderSummary = () => {
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
      id: 2,
      name: "JBL Authentics 300",
      sku: "JBLAUTH300BLKAM",
      price: 299.95,
      oldPrice: 449.95,
      image: "/img-example-3.webp",
      delivery: "Mar 4",
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
      id: 2,
      name: "JBL Authentics 300",
      sku: "JBLAUTH300BLKAM",
      price: 299.95,
      oldPrice: 449.95,
      image: "/img-example-3.webp",
      delivery: "Mar 4",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = 150;
  const total = subtotal - discount;
  
  return (
    <div className="h-fit rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="border-b border-neutral-300 p-5">
        <h2 className="text-2xl font-bold">Order summary</h2>
      </div>

      <div className="p-5">
        <label className="mb-2 block text-sm font-medium">
          Promo/Referral code
        </label>

        <div className="flex">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 rounded-l-md border border-r-black border-neutral-400 px-3 py-2 outline-none outline-indigo-600"
          />
          <button className="rounded-r-md  bg-black text-white px-4">
            Apply
          </button>
        </div>

        <div className="mt-8 space-y-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal (2 items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold text-green-600">FREE</span>
          </div>

          <div className="flex justify-between">
            <span>Estimated tax</span>
            <span>Will be calculated later</span>
          </div>
        </div>

        <div className="my-6 border-t border-neutral-300 pt-6">
          <div className="flex justify-between text-3xl font-bold">
            <span>Estimated Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <p className="mt-2 text-center text-sm text-gray-500">
            or starting from $16.67/mo for 24 months
          </p>
        </div>

        <div className="space-y-3">
          <button className="w-full  bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
            Checkout
          </button>

          <button className="w-full bg-yellow-400 py-3 font-medium text-black transition hover:bg-yellow-500">
            PayPal
          </button>
        </div>

        <div className="mt-8 border-t border-neutral-300 pt-5">
          <div className="mb-3 flex justify-between font-semibold">
            <span>Total Savings</span>
            <span>$150.00</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Promotional Discount(s)</span>
            <span>-$150.00</span>
          </div>

          <div className="mt-1 flex justify-between text-sm text-gray-600">
            <span>JBL Authentics 300</span>
            <span>-$150.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
