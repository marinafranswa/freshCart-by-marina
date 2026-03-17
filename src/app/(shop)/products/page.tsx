import ProductCard from "@/components/products/ProductCard/ProductCard";
import TitleBannerSection from "@/components/shared/TitleBannerSection/TitleBannerSection";
import { getProducts } from "@/services/products.service";
import { productsResponse } from "@/types/response.type";

export default async function ProductsPage() {
  const response: productsResponse = await getProducts();
  const products = response.data;



  return (
    <section>
        <TitleBannerSection/>
      <div className="container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod}/>
          ))}
        </div>
      </div>
    </section>
  );
}
