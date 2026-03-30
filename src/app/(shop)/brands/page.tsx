import TitleBannerSection from "@/components/shared/TitleBannerSection/TitleBannerSection";
import { Card } from "@/components/ui/card";
import { getBrands } from "@/services/brands.service";
import { BrandsResponse } from "@/types/response.type";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BrandsPage() {
    const resp: BrandsResponse = await getBrands();
    const brands = resp.data;
  return (
    <section className="min-h-screen bg-gray-50/50">
      <TitleBannerSection
        title="Top Brands"
        description="Shop from your favorite brands"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Brands" }]}
      />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 ">
          {brands.map((brand) => (
            <Card
              key={brand._id}
              className="group hover:border-violet-200 transition-all duration-300 hover:-translate-y-1 p-5"
            >
              <Link href={`/brands/${brand._id}`}>
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
                  <Image
                    alt={brand.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src={brand.image}
                    width={160}
                    height={160}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
                  {brand.name}
                </h3>
                <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity ">
                  <span className="text-xs text-violet-600 flex items-center gap-1">
                    View Products
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
