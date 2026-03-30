import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/products.interface";
import {
  Minus,
  Plus,
  RotateCcw,
  Share2Icon,
  Shield,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import AddToWishlistButton from "../AddToWishlistButton/AddToWishlistButton";

const totalStars = 5;
interface ProductInfoCarProps {
  prod:Product
}
export default function ProductInfoCard({prod}:ProductInfoCarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <Link
          className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1.5 rounded-full hover:bg-emerald-100 transition"
          href={`/categories/${prod.id}`}
        >
          {prod.category?.name}
        </Link>
        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
          {prod.brand?.name}
        </span>
      </div>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        {prod.title}
      </h1>
      <div className="flex items-center mb-4">
        {[...Array(totalStars)].map((_, i) => (
          <div key={i} className="text-yellow-400">
            <Star
              size={16}
              className={`${i < Math.round(prod.ratingsAverage) ? "fill-yellow-400" : ""}`}
            />
          </div>
        ))}
        <span className="text-sm text-gray-600">
          {prod.ratingsAverage} ({prod.ratingsQuantity} reviews)
        </span>
      </div>
      {prod.priceAfterDiscount ? (
        <div className="flex items-center flex-wrap gap-3 mb-6">
          <span className="text-3xl font-bold text-gray-900">
            {prod.price} EGP
          </span>
          <span className="text-lg text-gray-400 line-through">
            {prod.priceAfterDiscount} EGP
          </span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
            Save
            {Math.floor(
              ((prod.price - prod.priceAfterDiscount) / prod.price) * 100,
            )}
            %
          </span>
        </div>
      ) : (
        <div className="flex items-center flex-wrap gap-3 mb-6">
          <span className="text-3xl font-bold text-gray-900">
            {prod.price} EGP
          </span>
        </div>
      )}
      <div className="flex items-center gap-2 mb-6">
        {prod.quantity === 0 ? (
          <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-red-700">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Out of stock
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            In Stock
          </span>
        )}
      </div>
      <div className="border-t border-gray-100 pt-5 mb-6">
        <p className="text-gray-600 leading-relaxed">{prod.description}</p>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <Button
              variant={"ghost"}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50"
            >
              <Minus size={12} />
            </Button>

            <input
              min={1}
              max={150}
              className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
              type="number"
              defaultValue={1}
            />
            <Button
              variant={"ghost"}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50"
            >
              <Plus size={12} />
            </Button>
          </div>
          <span className="text-sm text-gray-500">
            {prod.quantity} available
          </span>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-2xl font-bold text-green-600">
            {/* price formula */} 499 EGP
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
     
        <AddToCartButton
        productId={prod.id}
          className={
            "flex-1 text-white py-5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 bg-green-600"
          }
      
          title={"Add to Cart"}
          />
        <Button
          variant={"default"}
          className="flex-1 bg-gray-900 text-white py-5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Zap />
          Buy Now
        </Button>
      </div>
      <div className="flex gap-3 mb-6">
        <AddToWishlistButton className={"flex-1 border-2 py-5 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600"}
        title={"Add to wishlist"} productId={prod.id}/>
        <Button
          variant={"ghost"}
          className="border-2 border-gray-200 text-gray-700 py-5 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition"
        >
          <Share2Icon />
        </Button>
      </div>
      <div className="border-t border-gray-100 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <Truck />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">
                Free Delivery
              </h4>
              <p className="text-xs text-gray-500">Orders over 1000 EGP</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <RotateCcw />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">
                30 Days Return
              </h4>
              <p className="text-xs text-gray-500">Money back</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <Shield />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">
                Secure Payment
              </h4>
              <p className="text-xs text-gray-500">100% Protected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
