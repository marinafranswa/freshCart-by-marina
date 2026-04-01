import { Brand } from "@/interfaces/brands.interface";
import { Category } from "@/interfaces/categories.interface";
import { ListingResponse } from "@/interfaces/listing.api.interface";
import { Product } from "@/interfaces/products.interface";
import { Subcategory } from "@/interfaces/subcategories.interface";

export type CategoriesResponse = ListingResponse<Category>;
export type productsResponse = ListingResponse<Product>;
export type BrandsResponse = ListingResponse<Brand>;
export type SubcategoriesResponse = ListingResponse<Subcategory>;

export type SingleProduct = {
    data:Product
}