export async function getBrands() {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/brands",
    );
    if (!response.ok) {
      throw new Error(response.statusText + "Error occurred");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);

    return error;
  }
}
