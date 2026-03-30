import { getUserCart } from "@/actions/cart.actions";
import { CartResponse } from "@/interfaces/cart.interface";
import { Card,  CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Tag,
  Lock,
  Shield,
  ArrowLeft,
  ArrowRight,
  Box,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import CartCardProduct from "@/components/cart/CartCardProduct/CartCardProduct";
import RemoveUserCart from "@/components/cart/RemoveUserCart/RemoveUserCart";

export default async function CartPage() {
  const cartDetails: CartResponse = await getUserCart();
  const products = cartDetails.data?.products;

  return (
    <>
      {products?.length > 0 ? (
        <section className="bg-gray-50 min-h-screen py-8">
          <div className="container px-4">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link className="hover:text-green-600 transition" href="/">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Shopping Cart</span>
              </nav>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <ShoppingCart size={32} />
                    </span>
                    Shopping Cart
                  </h1>
                  <p className="text-gray-500 mt-2">
                    You have
                    <span className="font-semibold text-green-600 px-0.5">
                      {cartDetails.numOfCartItems} items
                    </span>
                    in your cart
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {products.map((product) => (
                   <CartCardProduct key={product.product._id} product={product}/>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <Button
                    variant={"ghost"}
                    className="text-green-600 hover:bg-transparent hover:text-green-700 text-sm font-medium py-2"
                    asChild
                  >
                    <Link
                      className="flex items-center justify-center"
                      href="/products"
                    >
                      <ArrowLeft size={16} /> Continue Shopping
                    </Link>
                  </Button>
               <RemoveUserCart/>
                </div>
              </div>
              <div className="lg:col-span-1">
                <Card className="pt-0">
                  <CardHeader className="bg-linear-to-r from-green-600 to-green-700 p-6">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <ShoppingCart />
                      Order Summary
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      {cartDetails.numOfCartItems} items in your cart
                    </p>
                  </CardHeader>
                  <div className="p-6 space-y-5">
                    <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Truck color="green" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-700">
                          Free Shipping!
                        </p>
                        <p className="text-sm text-green-600">
                          You qualify for free delivery
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">
                          {cartDetails.data.totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="font-medium text-green-600">FREE</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-900 font-semibold">
                            Total
                          </span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              {cartDetails.data.totalCartPrice}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              EGP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={"outline"}
                      className="w-full flex items-center justify-center gap-2 py-6 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all"
                    >
                      <Tag />
                      <span className="text-sm font-medium">
                        Apply Promo Code
                      </span>
                    </Button>
                    <Button asChild variant={"outline"}>
                      <Link
                        className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-6 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                        href="/checkout"
                      >
                        <Lock />
                        <span>Secure Checkout</span>
                      </Link>
                    </Button>
                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Shield color="green" size={12} />
                        <span>Secure Payment</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Truck color="blue" size={16} />
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                    <Button
                      variant={"ghost"}
                      className="flex justify-center text-green-600 hover:bg-transparent hover:text-green-700 text-sm font-medium py-2"
                      asChild
                    >
                      <Link
                        className="flex items-center justify-center"
                        href="/products"
                      >
                        <ArrowLeft size={16} /> Continue Shopping
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-12">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                <Box size={52} className="text-gray-600" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven&apos;t added anything to your cart yet. Start
              exploring our products!
            </p>
            <Button asChild variant={"outline"}>
              <Link
                className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-6.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 hover:text-white transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]"
                href="/"
              >
                Start Shopping
                <ArrowRight size={16} />
              </Link>
            </Button>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
                  <Link
                    key={cat}
                    className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
