import ProductSlider from "@/components/products/ProductSlider/ProductSlider";
import NavTitle from "@/components/shared/NavTitle/NavTitle";
import { getProductDetails } from "@/services/products.service";
import { SingleProduct } from "@/types/response.type";


interface ProductDetailsProps{
  params:Promise<{productId:string}>
}
export default async function ProductDetails({ params }:ProductDetailsProps) {
  const { productId } = await params;
  const product:SingleProduct = await getProductDetails(productId)

  return (
    <>
      <NavTitle product={product.data} />
      <section className="py-6">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">

              <ProductSlider images={product.data.images} />
              </div>
            </div>
            <div className="lg:w-3/4">
              {/* product info, price, add to cart */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
