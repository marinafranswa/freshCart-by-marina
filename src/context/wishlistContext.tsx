import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "sonner";

const WishlistContext = createContext({
  count: 0,
  updateNumOfWishlistItems: (count: number) => {},
});

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [count, setNumOfWishlistItems] = useState(0);

  function updateNumOfWishlistItems(count: number) {
    setNumOfWishlistItems(count);
  }

  return (
    <WishlistContext.Provider value={{ count, updateNumOfWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    toast.error("useWishlist must be used within wishlistContext");
  }
  return context;
}
