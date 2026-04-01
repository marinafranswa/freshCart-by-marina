import { LucideIcon } from "lucide-react";
import Link from "next/link";
interface HeadingSectionProps {
  numberOfItems: number;
    title: string;
    icon: LucideIcon;
    subtitle:string
}

export default function HeadingSection({
  numberOfItems,
  title,
  icon: Icon,
  subtitle,
}:HeadingSectionProps) {
  return (
    <div className="mb-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link className="hover:text-green-600 transition" href="/">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{title}</span>
      </nav>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
              <Icon size={32} />
            </span>
            {title}
          </h1>
          <p className="text-gray-500 mt-2">
            You have
            <span className="font-semibold text-green-600 px-0.5">
              {numberOfItems} items
            </span>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
