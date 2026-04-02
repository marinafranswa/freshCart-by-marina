"use server";

import { addressPayloadType } from "@/app/schemas/address.schema";
import { getUserId, getUserToken } from "@/lib/token-utils";
import { revalidateTag } from "next/cache";

export async function createOrder(
  cartId: string,
  formValues: addressPayloadType,
) {
  try {
    const { paymentMethod, ...shippingAddress } = formValues;
    const endPoint =
      paymentMethod === "cash"
        ? `api/v2/orders/${cartId}`
        : `api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`;
    const token = await getUserToken();
    const resp = await fetch(`https://ecommerce.routemisr.com/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(shippingAddress),
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to create cash order!");
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

export async function getUserOrders() {
  try {
    const userId = await getUserId();
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || "failed to fetch your orders!");
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