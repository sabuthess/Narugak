import { FilterPrice } from "./FilterPrice"

export const CategoriesAndFilters = () => {
  return (
        <div className="py-4 px-8 w-[20%] border-r bg-amber-200">
            {/* Categorias */}

            <div>
              <h1 className="text-lg font-bold">Categorias</h1>

              <ul className="px-3">
                {/* TODO: agregar links */}
                <li className="text-neutral-700 hover:text-black hover:font-medium">
                  Todo
                </li>
                <li className="text-neutral-700 hover:text-black hover:font-medium">
                  Hombres
                </li>
                <li className="text-neutral-700 hover:text-black hover:font-medium">
                  Mujeres
                </li>
                <li className="text-neutral-700 hover:text-black hover:font-medium">
                  Basket
                </li>
                <li className="text-neutral-700 hover:text-black hover:font-medium">
                  Casual
                </li>
                <li className="text-neutral-700 hover:text-black hover:font-medium">
                  Zapatillas
                </li>
              </ul>
            </div>

            {/* Filtros */}
            <div className="mt-10  w-full flex-1  ">
              <h1 className="text-lg font-bold">Ordernar por: </h1>
              {/* TODO: crear un componente para cada filtro */}
              {/* filtro precio*/}
              <FilterPrice />
              <FilterPrice />
              <FilterPrice />
              <FilterPrice />
            </div>
          </div>
  )
}
