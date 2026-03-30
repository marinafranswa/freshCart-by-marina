
import TitleBannerSection from "@/components/shared/TitleBannerSection/TitleBannerSection";
import { getCategories } from "@/services/categories.service";
import { CategoriesResponse } from "@/types/response.type";
import { ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function CategoriesPage() {
  const resp: CategoriesResponse = await getCategories();
  const categories = resp.data;
  return (
      <section className="min-h-screen bg-gray-50/50">
        <TitleBannerSection
          title="All Categories"
          description="Browse our wide range of product categories"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}
        />
        <div className="container px-4 py-10">
         
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
            {categories.map((category) => (
              <Link
                key={category._id}
                className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
                href={`/categories/${category._id}`}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                  <Image
                    width={400}
                    height={800}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={category.image}
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    View Subcategories
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

  );
}
