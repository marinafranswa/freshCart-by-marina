import Link from "next/link";
import SponsorBar from "../SponsorBar/SponsorBar";
import Image from "next/image";
import logoImage from "@/assets/freshcart-logo.49f1b44d.svg";
import {
  ChevronDown,
  Headset,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
const links = [
  { name: "home", href: "/" },
  { name: "shop", href: "/products" },
  { name: "Brands", href: "/brands" },
];
const categories = [
  { name: "All Categories", href: "/categories" },
  { name: "Electronics", href: `/categories/id` },
  {
    name: "Women's Fashion",
    href: `/categories/id}`,
  },
  {
    name: "Men's Fashion",
    href: `/categories/id`,
  },
  {
    name: "Beauty & Health",
    href: `/categories/id`,
  },
];

export default function Navbar() {
  return (
    <>
      <SponsorBar />
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="bg-white">
          <div className="container">
            <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
              <Link className="shrink-0" href="/">
                <Image
                  alt="FreshCart"
                  width={160}
                  height={31}
                  className="h-6 lg:h-8 w-auto"
                  src={logoImage.src}
                />
              </Link>
              <form className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
                  >
                    <Search size={16} />
                  </button>
                </div>
              </form>
              <nav className="hidden xl:flex items-center gap-6">
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 font-medium transition-colors py-2">
                    Categories
                    <ChevronDown />
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                      {categories.map((category, idx) => (
                        <Link
                          key={idx}
                          className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                          href={category.href}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  href={links[2].href}
                >
                 {links[2].name}
                </Link>
              </nav>
              <div className="flex items-center gap-1 lg:gap-2">
                <Link
                  className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
                  href="/contact"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Headset
                      size={18}
                      className="text-green-600 hover:text-green-500"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="text-gray-400 font-medium">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </Link>
                <Link
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                  title="Wishlist"
                  href="/wishlist"
                >
                  <Heart className="text-gray-500" />
                </Link>
                <Link
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                  title="Cart"
                  href="/cart"
                >
                  <ShoppingCart
                    className="text-gray-500 fill-gray-500"
                    size={25}
                  />
                </Link>
                <a
                  className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs xl:text-sm  font-semibold transition-colors shadow-sm shadow-green-600/20"
                  href="/login"
                >
                  <User size={16} />
                  Sign In
                </a>
                <button className="lg:hidden ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
                  <Menu size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
