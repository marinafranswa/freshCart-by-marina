import HeadTitle from "../../shared/HeadTitle/HeadTitle";
import { getCategories } from "@/services/categories.service";
import { CategoriesResponse } from "@/types/response.type";
import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const resp: CategoriesResponse = await getCategories();
  const categories = resp.data;

  return (
    <section className="py-10">
      <div className="container">
        <HeadTitle
          title="Shop By"
          sub="Category"
          sideTitle="View All Categories"
          href="/categories"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category?._id}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
              href={`categories/${category?._id}`}
            >
              <div className="h-20 w-20 overflow-hidden bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200 transition">
                <Image
                  alt={category?.slug}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  style={{ color: "transparent" }}
                  src={category?.image}
                />
              </div>
              <h3 className="font-medium">{category?.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
