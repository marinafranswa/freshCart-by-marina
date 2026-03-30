import { Package, LucideIcon } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TitleBannerSectionProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function TitleBannerSection({
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
}: TitleBannerSectionProps) {
  return (
    <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-white/40">/</span>}
              {crumb.href ? (
                <Link
                  className="hover:text-white transition-colors"
                  href={crumb.href}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
            <Package size={28} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            {description && <p className="text-white/80 mt-1">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
