"use server";

import { getUserToken } from "@/lib/token-utils";
import { revalidateTag } from "next/cache";

export async function getUserCart() {
  try {
    const token = await getUserToken();
    const resp = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      next: { tags: ["cartDetails"] },
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to access cart");
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
export async function addToCart(productId: string) {
  try {
    const token = await getUserToken();
    const resp = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify({ productId }),
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to add item to cart");
    }
    const response = {
      ...data,
      status: true,
    };
    if (response.status) {
      revalidateTag("cartDetails", "max");
    }
    return response;
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}
export async function updateProductQuantity(productId: string, count: number) {
  try {
    const token = await getUserToken();
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
        body: JSON.stringify({ count }),
      },
    );
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(
        data.message || "failed to update item quantity in the cart",
      );
    }
    const response = {
      ...data,
      status: true,
    };
    if (response.status) {
      revalidateTag("cartDetails", "max");
    }
    return response;
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}
export async function removeProduct(productId: string) {
  try {
    const token = await getUserToken();
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
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
      revalidateTag("cartDetails", "max");
    }
    return response;
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}
export async function clearUserCart() {
  try {
    const token = await getUserToken();
    const resp = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to clear the cart");
    }
    const response = {
      ...data,
      status: true,
    };
    if (response.status) {
      revalidateTag("cartDetails", "max");
    }
    return response;
  } catch (error) {
    return {
      error,
      status: false,
    };
  }
}