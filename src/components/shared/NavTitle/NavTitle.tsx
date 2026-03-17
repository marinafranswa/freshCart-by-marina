import { Product } from "@/interfaces/products.interface";
import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
interface NavTitleProps {
  product: Product;
}
export default function NavTitle({product}:NavTitleProps) {
  return (
    <>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                href="/"
              >
                <House size={20} />
                Home
              </Link>
              <ChevronRight />
            </li>
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                href={`/categories/${product._id}`}
              >
                {product.category.name}
              </Link>
              <ChevronRight />
            </li>
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                href={`/categories/${product.subcategory[0]._id}`}
              >
                {product.subcategory[0].name}
              </Link>
              <ChevronRight />
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {product.title}
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}
