"use server";

import { getUserToken } from "@/lib/token-utils";
import { revalidateTag } from "next/cache";

export async function getUserWishlist() {
  try {
    const token = await getUserToken();
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
        next: { tags: ["wishlistDetails"] },
      },
    );
      const data = await resp.json();
      
    if (!resp.ok) {
      throw new Error(data.message || "failed to access wishlist");
    }
    return {
      ...data,
      status: true,
    };
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}
export async function addToWishlist(productId: string) {
  try {
    const token = await getUserToken();
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
        body: JSON.stringify({ productId }),
      },
    );
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to add item to wishlist");
    }
    const response = {
      ...data,
      status: true,
    };
    if (response.status) {
      revalidateTag("wishlistDetails", "max");
    }
    return response;
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}

export async function deleteProductFromWishlist(productId: string) {
  try {
    const token = await getUserToken();
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
      },
    );
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to delete item");
    }
    const response = {
      ...data,
      status: true,
    };
    if (response.status) {
      revalidateTag("wishlistDetails", "max");
    }
    return response;
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}
