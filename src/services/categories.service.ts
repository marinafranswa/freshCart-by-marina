export async function getCategories() {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
    );
    if (!response.ok) {
      throw new Error( response.statusText+ "Error occurred");
    }
    const data = await response.json();
    return data;
  } catch (error) {
      
    return error;
  }
}
export async function getSubCategories(categoryId:string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
    );
    if (!response.ok) {
      throw new Error(response.statusText + "Error occurred");
    }
    const data = await response.json();
    return data;
  } catch (error) {

    return error;
  }
}
export async function getSpecificSubCategories(categoryId: string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`,
    );
    if (!response.ok) {
      throw new Error(response.statusText + "Error occurred");
    }
    const data = await response.json();
    return data;
  } catch (error) {

    return error;
  }
}

