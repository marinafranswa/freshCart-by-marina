"use client";

import CartContextProvider from "@/context/CartContext";
import WishlistContextProvider from "@/context/wishlistContext";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <WishlistContextProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </WishlistContextProvider>
    </SessionProvider>
  );
}
