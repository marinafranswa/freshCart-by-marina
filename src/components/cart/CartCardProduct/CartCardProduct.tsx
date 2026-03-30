"use client";
import { Minus, Plus, Trash2, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartProduct } from "@/interfaces/cart.interface";
import { removeProduct, updateProductQuantity } from "@/actions/cart.actions";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

export default function CartCardProduct({ product }: { product: CartProduct }) {
  const { updateNumOfCartItems } = useCart();
  async function updateQuantity(id: string, count: number) {
    const resp = await updateProductQuantity(id, count);
    if (resp.status) {
      toast.success(resp.message);
      updateNumOfCartItems(resp.numOfCartItems);
    } else {
      toast.error(resp.error.message);
    }
  }
  async function removeProductFromCart(productId: string) {
    const response = await removeProduct(productId);
    if (response.status) {
      toast.success(response.message);
      updateNumOfCartItems(response.numOfCartItems);
    } else {
      toast.error(response.error.message);
    }
  }
  return (
    <Card>
      <CardContent className="p-4 sm:p-5">
        <div className="flex gap-4 sm:gap-6">
          <Link
            href={`/products/${product.product._id}`}
            className="relative shrink-0 group"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
              <Image
                src={product.product.imageCover}
                alt={product.product.title}
                width={54}
                height={54}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <Badge className="absolute -bottom-1 -right-1 bg-green-500 hover:bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
              <Check size={8} />
              In Stock
            </Badge>
          </Link>

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="mb-3">
              <Link
                href={`/products/${product.product._id}`}
                className="group/title"
              >
                <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                  {product.product.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700 text-xs font-medium rounded-full"
                >
                  {product.product.category?.name}
                </Badge>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">
                  SKU: {product._id.slice(-6).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-green-600 font-bold text-lg">
                  {product.product.price} EGP
                </span>
                <span className="text-xs text-gray-400">per unit</span>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center bg-gray-50 rounded-xl p-1 border gap-x-1.5 border-gray-200">
                <Button
                  onClick={() =>
                    updateQuantity(product.product._id, product.count - 1)
                  }
                  size={"icon"}
                  variant="outline"
                >
                  <Minus size={12} />
                </Button>

                {product.count}

                <Button
                  onClick={() =>
                    updateQuantity(product.product._id, product.count + 1)
                  }
                  size={"icon"}
                  variant="outline"
                >
                  <Plus size={12} />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-0.5">Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    {product.price * product.count}
                    <span className="text-sm font-medium text-gray-400">
                      EGP
                    </span>
                  </p>
                </div>

                <Button
                  onClick={() => removeProductFromCart(product.product?.id)}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-xl border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
