export async function getProducts(limit: number = 40) {
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?limit=${limit}`,
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
