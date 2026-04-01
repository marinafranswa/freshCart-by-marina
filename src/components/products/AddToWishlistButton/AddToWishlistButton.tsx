"use client";
import { addToWishlist } from "@/actions/wishlist.actions";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/wishlistContext";
import { Heart } from "lucide-react";
import { toast } from "sonner";

interface AddToWishlistButtonProps {
  title?: string;
  className: string;
  productId: string;
}

export default function AddToWishlistButton({
  title,
  className,
  productId,
}: AddToWishlistButtonProps) {
  const { updateNumOfWishlistItems } = useWishlist();

  async function addProductToWishlist(productId: string) {
    const res = await addToWishlist(productId);
    if (res.status) {
      toast.success(res.message);
        updateNumOfWishlistItems(res.data.length);
        
    } else {
      toast.error(res.error.message);
    }
  }

  return (
    <Button
      variant="ghost"
      className={className}
      onClick={() => addProductToWishlist(productId)}
    >
      <Heart />
      {title}
    </Button>
  );
}
