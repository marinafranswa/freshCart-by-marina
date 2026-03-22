import ProductInfoCard from "@/components/products/ProductInfoCard/ProductInfoCard";
import ProductSlider from "@/components/products/ProductSlider/ProductSlider";
import ReviewCard from "@/components/products/ReviewCard/ReviewCard";
import SuggestionProductSlider from "@/components/products/SuggestionProductSlider/SuggestionProductSlider";

import NavTitle from "@/components/shared/NavTitle/NavTitle";
import { getProductDetails, getProducts } from "@/services/products.service";
import { productsResponse, SingleProduct } from "@/types/response.type";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = await params;
  const product: SingleProduct = await getProductDetails(productId);
  const productItem= product.data
  const response: productsResponse = await getProducts();
  const products = response.data;

  return (
    <>
      <NavTitle product={product?.data} />
      <section className="py-6">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                <ProductSlider images={productItem.images} />
              </div>
            </div>
            <div className="lg:w-3/4">
              <ProductInfoCard prod={productItem} />
            </div>
          </div>
          <ReviewCard productInfo={productItem} />
        </div>
        <div>
  <SuggestionProductSlider productsSlider={products}/>
        </div>
       
      </section>
    </>
  );
}
