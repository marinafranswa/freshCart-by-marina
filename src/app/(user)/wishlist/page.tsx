import { getUserWishlist } from "@/actions/wishlist.actions";
import { Button } from "@/components/ui/button";
import { wishlistResponse } from "@/interfaces/wishlist.interface";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WishlistTableRow from "@/components/wishlist/WishlistTableRow/WishlistTableRow";

export default async function wishlistPage() {
  const wishListDetails: wishlistResponse = await getUserWishlist();
  const products = wishListDetails.data;

  return (
    <>
      {products?.length > 0 ? (
        <div className="min-h-screen bg-gray-50/50">
          <div className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 py-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link
                  className="hover:text-green-600 transition-colors"
                  href="/"
                >
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Wishlist</span>
              </nav>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Heart fill="red" color="red" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      My Wishlist
                    </h1>
                    <p className="text-gray-500 text-sm">
                      {wishListDetails.count} items saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <Table className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <TableHeader className="hidden md:table-header-group border-b border-gray-100 bg-gray-50 ">
                <TableRow className="grid grid-cols-12  gap-4 px-6 py-3 w-full">
                  <TableHead className="col-span-6 text-sm font-medium text-gray-500">
                    Product
                  </TableHead>
                  <TableHead className="col-span-2 text-center text-sm font-medium text-gray-500">
                    Price
                  </TableHead>
                  <TableHead className="col-span-2 text-center text-sm font-medium text-gray-500">
                    Status
                  </TableHead>
                  <TableHead className="col-span-2 text-center text-sm font-medium text-gray-500">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <WishlistTableRow key={product._id} product={product} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50/50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-sm mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Heart size={32} color="gray" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Browse products and save your favorites here. Sign in to sync
                your wishlist across devices.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  variant={"outline"}
                  className="hover:bg-green-700 hover:text-white"
                >
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-6 rounded-xl bg-green-600 text-white font-semibold transition-colors"
                    href={"/products"}
                  >
                    Browse Products
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant={"outline"}>
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-6 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    href={"/login"}
                  >
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
