"use server";
import { loginPayloadType } from "@/app/schemas/login.schema";
import { cookies } from "next/headers";

export async function loginHandler(formValues: loginPayloadType) {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: { "Content-Type": "application/json" },
      },
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.message || "something went wrong");
    }
    const cookie = await cookies();
    cookie.set("userToken", data.token, {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
