import HeadTitle from "@/components/shared/HeadTitle";
import { getProducts } from "@/services/products.service";
import { productsResponse } from "@/types/response.type";
import { Eye, Heart, Plus, RefreshCcw, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const totalStars: number = 5;
export default async function Products() {
  const response: productsResponse = await getProducts();
    const products = response.data;
    console.log(products);
    

  return (
      <section>
      <div className="container">
        <HeadTitle title="Featured" sub="Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((prod) => (
            <div
              key={prod._id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  className="w-full h-60 object-contain bg-white"
                  src={prod.imageCover}
                  width={273}
                  height={240}
                  alt={prod.title}
                />
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
                    title="Add to wishlist"
                  >
                    <Heart />
                  </button>
                  <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm">
                    <RefreshCcw />
                  </button>
                  <Link
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
                    href={`/products/${prod._id}`}
                  >
                    <Eye />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">
                  {prod.category.name}
                </div>
                <h3
                  className="font-medium mb-1 cursor-pointer "
                  title={prod.title}
                >
                  <Link className="line-clamp-2" href={`/products/${prod._id}`}>
                    {prod.title}
                  </Link>
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400 mr-2">
                    {[...Array(totalStars)].map((_, i) => (
                      <div key={i} className="text-yellow-400">
                        <Star
                          size={16}
                          className={`${i < Math.round(prod.ratingsAverage) ? "fill-yellow-400" : ""}`}
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {prod.ratingsAverage} ({prod.ratingsQuantity})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-800">
                      {prod.price} EGP
                    </span>
                  </div>
                  <button className="h-10 w-10 rounded-full flex items-center justify-center transition bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-70">
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
