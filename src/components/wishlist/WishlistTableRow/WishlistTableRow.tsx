"use client"
import { deleteProductFromWishlist } from "@/actions/wishlist.actions";
import AddToCartButton from "@/components/products/AddToCartButton/AddToCartButton";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { useWishlist } from "@/context/wishlistContext";
import { Product } from "@/interfaces/products.interface";
import { Trash } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { toast } from "sonner";



export default function WishlistTableRow({ product }: { product: Product }) {
  const { updateNumOfWishlistItems } = useWishlist();
    async function removeProductFromWishlist(productId: string) {
      const res = await deleteProductFromWishlist(productId);
      console.log(res);
      if (res.status) {
        toast.success(res.message);
        updateNumOfWishlistItems(res.numOfCartItems);
      } else {
        toast.error(res.error.message);
      }
    }
  return (
    <TableRow className="grid grid-cols-12 gap-4 px-6 py-4 w-full items-center">
      <TableCell className="col-span-6 font-medium">
        <div className="flex items-center gap-4">
          <Image
            src={product.imageCover}
            alt={product.title}
            width={54}
            height={54}
            className="rounded-md object-cover"
          />
          <div className="min-w-0">
            <Link
              className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
              href={`/products/${product._id}`}
              title={product.title}
            >
              {product.title}
            </Link>
            <p className="text-sm text-gray-400 mt-1">
              {product.category.name}
            </p>
          </div>
        </div>
      </TableCell>

      <TableCell className="col-span-2 text-center">
        <div className="font-semibold text-gray-900">
          {product.priceAfterDiscount ?? product.price} EGP
        </div>
        {product.priceAfterDiscount && (
          <div className="text-sm text-gray-400 line-through">
            {product.price} EGP
          </div>
        )}
      </TableCell>

      <TableCell className="col-span-2 flex justify-center">
        {product.quantity === 0 ? (
          <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Out of stock
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            In Stock
          </span>
        )}
      </TableCell>

      <TableCell className="col-span-2 flex items-center justify-center gap-2">
        <AddToCartButton
          productId={product._id}
          className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700"
        />
        <Button
          variant="outline"
          onClick={() => removeProductFromWishlist(product._id)}
          size="icon"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}


