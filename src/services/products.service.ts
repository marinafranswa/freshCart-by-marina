export async function getProducts(categoryId?: string) {
  const url = categoryId
    ? `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`
    : `https://ecommerce.routemisr.com/api/v1/products`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

export async function getProductDetails(id:string) {
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );
    if (!resp.ok) {
      throw new Error("can't fetch products");
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}
