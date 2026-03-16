export async function getProducts() {
    try {
        const resp = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products",
        );
        if (!resp.ok) {
            throw new Error("can't fetch products");
            
        }
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}