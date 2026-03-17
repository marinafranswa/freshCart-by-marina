import { Headset, RotateCcw, ShieldHalf, Truck } from "lucide-react";

type BannerVariant = "multicolor" | "emerald";

interface CommonBannerProps {
  variant?: BannerVariant;
}

const bannerItems = [
  { icon: Truck, title: "Free Shipping", subtitle: "On orders over 500 EGP" },
  {
    icon: ShieldHalf,
    title: "Secure Payment",
    subtitle: "100% secure transactions",
  },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "14-day return policy" },
  { icon: Headset, title: "24/7 Support", subtitle: "Dedicated support team" },
];


const multicolorStyles = [
  { iconBg: "bg-blue-50", iconText: "text-blue-500" },
  { iconBg: "bg-emerald-50", iconText: "text-emerald-500" },
  { iconBg: "bg-orange-50", iconText: "text-orange-500" },
  { iconBg: "bg-purple-50", iconText: "text-purple-500" },
];

const variantStyles: Record<
  BannerVariant,
  {
    section: string;
    iconBg: string;
    iconText: string;
    borderSection: string;
  }
> = {
  multicolor: {
    section: "bg-gray-50",
    iconBg: "",
    iconText: "",
    borderSection:
      "gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300",
  },
  emerald: {
    section: "bg-emerald-50 border-y border-emerald-100",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    borderSection: "gap-3",
  },
};

export default function CommonBanner({
  variant = "multicolor",
}: CommonBannerProps) {
  const styles = variantStyles[variant];

  return (
    <section className={styles.section}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bannerItems.map((item, i) => {
            const Icon = item.icon;

            const iconBg =
              variant === "multicolor"
                ? multicolorStyles[i].iconBg
                : styles.iconBg;
            const iconText =
              variant === "multicolor"
                ? multicolorStyles[i].iconText
                : styles.iconText;

            return (
              <div
                key={item.title}
                className={`flex items-center ${styles.borderSection}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`${iconText} text-lg`} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
