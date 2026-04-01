"use client"
import { addToCart } from '@/actions/cart.actions';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Plus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';


interface AddToCartButtonProps {
  title?: string;
    className: string;
    productId:string
}


export default function AddToCartButton({ title, className, productId }: AddToCartButtonProps) {
   const {updateNumOfCartItems}= useCart()
async function addProductToCart(productId:string) {
 const res =await   addToCart(productId)
    if (res.status) {
        toast.success(res.message)
        updateNumOfCartItems(res.numOfCartItems)
    } else {
        toast.error(res.error.message)
    }
    
}
  return (
    <Button variant={"default"} className={className} onClick={()=>{addProductToCart(productId);}}>
    
   {title?<ShoppingCart/>:<Plus/>}   {title}
    </Button>
  );
}
