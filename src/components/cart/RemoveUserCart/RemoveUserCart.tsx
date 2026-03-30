"use client"
import { clearUserCart } from "@/actions/cart.actions";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash } from "lucide-react";
import { toast } from "sonner";

export default function RemoveUserCart() {
      const { updateNumOfCartItems } = useCart();
    async function clearCart() {
        const response = await clearUserCart()
         if (response.status) {
           toast.success(response.message);
           updateNumOfCartItems(response.numOfCartItems);
         } else {
           toast.error(response.error.message);
         }
    }
  return (
      <Button
          onClick={clearCart}
      variant={"ghost"}
      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
    >
      <Trash />
      <span>Clear all items</span>
    </Button>
  );
}
