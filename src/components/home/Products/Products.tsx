import ProductCard from "@/components/products/ProductCard/ProductCard";
import HeadTitle from "@/components/shared/HeadTitle/HeadTitle";
import { getProducts } from "@/services/products.service";
import { productsResponse } from "@/types/response.type";


export default async function Products() {
  const response: productsResponse = await getProducts();
  const products = response?.data;
  const filterProds = products.filter((prod) => prod.priceAfterDiscount);

  return (
    <section>
      <div className="container">
        <HeadTitle title="Featured" sub="Products" sideTitle="See all Products" href="/products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
          {filterProds.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
