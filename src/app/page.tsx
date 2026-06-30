"use client";
import { ArrowDownZA as SortIcon } from "lucide-react";
import { ProductCartHomeSkeleton } from "@/components/ProductCartHome/ProductCartHomeSkeleton";
import { ProductHomeCart } from "@/components/ProductCartHome/ProductHomeCart";
import { ProductDetail } from "@/components/ProductDetail/ProductDetail";
import { useState } from "react";
// import { IProduct } from "@/interfaces/product.interface";
// import { useState } from "react";

// const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default function Home() {
  const [isActiveModalSort, setIsActiveModalSort] = useState<boolean>(false);

  // const [posts, setPosts] = useState<IProduct[]>([]);
  const posts = [{}, {}, {}];
  // const [limit, setLimit] = useState(10);
  // const [offset, setOffset] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const currentPage = 1;

  /*   useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}/products`);

        console.log(res);
        const data = await res.json();
        // console.log(data);
        // setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []); */

  return (
    <main className="w-full flex">
      <div className=" px-10 py-5 flex-1  flex flex-col gap-5 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl ">Más Nuevo</h1>
            <p className="text-amber-600">Un Paso Al Estilo con Narugak</p>
          </div>
          {/* Boton ordenar */}
          <button
            onClick={() => setIsActiveModalSort(!isActiveModalSort)}
            className=" relative border border-neutral-400  cursor-pointer w-40 z-10 flex px-3 "
          >
            <div
              className=" flex w-full justify-between items-center "
              // onClick={() => setIsActiveModalSort(!isActiveModalSort)}
            >
              <p>Ordenar</p>
              <SortIcon className="size-6 text-black " />
            </div>
            <div
              className={`${isActiveModalSort ? "top-15 w-full left-0  backdrop-blur-lg absolute p-4 w bg-black  text-white order-1" : "hidden"}`}
            >
              <ul className="flex flex-col gap-4">
                <li className="hover:text-neutral-300">Recomendado</li>
                <li className="hover:text-neutral-300 ">Más nuevo</li>
                <li className="hover:text-neutral-300 ">Más vendido</li>
                <li className="hover:text-neutral-300 ">Popular</li>
              </ul>
            </div>
          </button>
        </div>

        <div className="w-full flex flex-wrap gap-5">
          {posts.length === 0 ? (
            <>
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
              <ProductCartHomeSkeleton />
            </>
          ) : (
            /*  posts.map((post) => (
              <ProductHomeCart
                key={post.name}
                description={post.description}
                name={post.name}
                price={post.price}
              />
            )) */
            <ProductHomeCart
              description="nose que poner aqui, pero que mas da"
              name="JBL authentics 300"
              price={99.99}
              key={1}
            />
          )}
        </div>
        <nav className="flex items-center gap-2">
          <button
            // onClick={() => setCurrentPage(-1)}
            className={`${currentPage !== 1 ? "px-3 py-2 border border-neutral-800 rounded-md hover:bg-gray-100  " : "hidden"}`}
          >
            Prev
          </button>

          <button className="w-10 h-10 border border-neutral-800 rounded-md bg-black  text-white ">
            1
          </button>

          <button className="w-10 h-10 border border-neutral-800 rounded-md hover:bg-gray-100  ">
            2
          </button>

          <button className="w-10 h-10 border rounded-md border-neutral-800 hover:bg-gray-100  ">
            3
          </button>

          {/* TODO: que cuando sea el utilimo elemento de pagina ya no mostrar */}
          <button
            // onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-2 border border-neutral-800 rounded-md hover:bg-gray-100  "
          >
            Next
          </button>
        </nav>
      </div>
      <ProductDetail />
    </main>
  );
}
