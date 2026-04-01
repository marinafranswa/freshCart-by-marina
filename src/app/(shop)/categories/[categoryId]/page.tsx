
import TitleBannerSection from "@/components/shared/TitleBannerSection/TitleBannerSection";
import { Card } from "@/components/ui/card";
import { getSpecificSubCategories, getSubCategories } from "@/services/categories.service";
import { SubcategoriesResponse } from "@/types/response.type";
import { ArrowLeft, ArrowRight, FolderOpen } from "lucide-react";
import Link from "next/link";

interface CategoryDetailsProps {
  params: Promise<{ categoryId: string }>;
}
export default async function CategoryDetails({ params }:CategoryDetailsProps) {
  const { categoryId } = await params;
  const resp: SubcategoriesResponse = await getSubCategories(categoryId);
  const response2 = await getSpecificSubCategories(categoryId)
  

  
  return (
    <section className="min-h-screen bg-gray-50/50">
      <TitleBannerSection
        title={response2?.data.name}
        description="Choose a subcategory to browse products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Categories" },
          { label: `${response2?.data.name}` },
        ]}
      />
      <div className="container mx-auto px-4 py-10">
        <Link
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"
          href={"/categories"}
        >
          <ArrowLeft size={15} />
          <span>Back to Categories</span>
        </Link>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            {resp.data.length} Subcategories in {response2.data.name}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {resp.data.map((sub) => (
            <Card key={sub._id} className="p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
              <Link
                className="group"
                href={`/products?subcategory=${response2.data._id}`}
              >
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <FolderOpen size={28} color="green" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                {sub.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Browse Products</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
