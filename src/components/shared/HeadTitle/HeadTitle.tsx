import { ArrowRight } from "lucide-react";
import Link from "next/link";
type SectionTitleProps = {
  title: string;
  sub: string;
  sideTitle?: string;
  href?: string;
};

export default function HeadTitle({
  title,
  sub,
  sideTitle,href
}: SectionTitleProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
      <div className="flex  items-center gap-3 my-8">
        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title} <span className="text-emerald-600">{sub}</span>
        </h2>
      </div>
{href? <Link
        className="text-emerald-600 self-end sm:self-auto hover:text-emerald-700 font-medium flex items-center cursor-pointer"
        href={href}
      >
        {sideTitle}
        <ArrowRight size={18} />
      </Link>:null}
    </div>
  );
}
