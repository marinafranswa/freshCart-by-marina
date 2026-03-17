import { Eye, Heart, Plus, RefreshCcw, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/products.interface";

const totalStars: number = 5;

interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transform hover:-translate-y-1.5 hover:shadow transition duration-300">
      <div className="relative">
        <Image
          className="w-full h-60 object-contain bg-white"
          src={product?.imageCover}
          width={273}
          height={240}
          alt={product?.title}
        />
        {product.priceAfterDiscount ? (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -
              {Math.floor(
                ((product?.price - product?.priceAfterDiscount) / product?.price) *
                  100,
              )}
              %
            </span>
          </div>
        ) : null}

        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <Button className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition cursor-pointer shadow-sm text-gray-600 hover:text-red-500">
            <Heart size={16} />
          </Button>
          <Button className="bg-white h-8 w-8 rounded-full flex items-center transition cursor-pointer justify-center text-gray-600 hover:text-emerald-600 shadow-sm">
            <RefreshCcw size={16} />
          </Button>
          <Link
            className="bg-white h-8 w-8 rounded-full flex items-center transition justify-center text-gray-600 hover:text-emerald-600 shadow-sm"
            href={`/products/${product?._id}`}
          >
            <Eye size={16} />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">
          {product?.category.name}
        </div>
        <h3
          className="font-medium mb-1 cursor-pointer truncate"
          title={product?.title}
        >
          <Link href={`/products/${product?._id}`}>{product?.title}</Link>
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400 mr-2">
            {[...Array(totalStars)].map((_, i) => (
              <div key={i} className="text-yellow-400">
                <Star
                  size={16}
                  className={`${i < Math.round(product?.ratingsAverage) ? "fill-yellow-400" : ""}`}
                />
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product?.ratingsAverage} ({product?.ratingsQuantity})
          </span>
        </div>

        <div className="flex items-center justify-between">
          {product?.priceAfterDiscount ? (
            <div>
              <span className="text-lg font-bold text-emerald-600">
                {product?.priceAfterDiscount} EGP
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                {product?.price} EGP
              </span>
            </div>
          ) : (
            <div>
              <span className="text-lg font-bold text-gray-800">
                {product?.price} EGP
              </span>
            </div>
          )}

          <Button className="h-10 w-10 rounded-full flex items-center justify-center transition bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-70">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
