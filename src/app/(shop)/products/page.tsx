import ProductCard from "@/components/products/ProductCard/ProductCard";
import TitleBannerSection from "@/components/shared/TitleBannerSection/TitleBannerSection";
import { getProducts } from "@/services/products.service";
import { getCategories } from "@/services/categories.service";
import { productsResponse } from "@/types/response.type";
import { BoxIcon, Filter, FolderOpen, X } from "lucide-react";
import Link from "next/link";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category } = await searchParams;
  const response: productsResponse = await getProducts(category);
  const products = response.data;

  let categoryName: string | null = null;
  if (category) {
    const categoriesResp = await getCategories();
    const found = categoriesResp?.data?.find(
      (cat: { _id: string; name: string }) => cat._id === category,
    );
    categoryName = found?.name ?? null;
  }

  return (
    <section>
      <TitleBannerSection
        title={categoryName ?? "All Products"}
        description="Explore our complete product collection"
      />
      <div className="container py-8">
        {category && categoryName && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <Filter size={15} />
              Active Filters:
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              <FolderOpen size={15} />
              {categoryName}
              <Link href="/products">
                <X size={15} />
              </Link>
            </span>
            <Link
              className="text-sm text-gray-500 hover:text-gray-700 underline"
              href="/products"
            >
              Clear all
            </Link>
          </div>
        )}

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="mx-auto px-4 py-8">
            <div className="mb-6 text-sm text-gray-500">Showing 0 products</div>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <BoxIcon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 mb-6">
                No products match your current filters.
              </p>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                href="/products"
              >
                View All Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
