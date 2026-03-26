"use client"

import Link from "next/link";
import SponsorBar from "../SponsorBar/SponsorBar";
import Image from "next/image";
import logoImage from "@/assets/freshcart-logo.49f1b44d.svg";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Headset,
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Dialog from "@/components/shared/Dialog/Dialog";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useLogout } from "@/hooks/useLogout";

interface NavbarProps {
  className?: string;
}

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "Brands", href: "/brands" },
];

const categories = [
  { name: "All Categories", href: "/categories" },
  { name: "Electronics", href: `/categories/electronics` },
  { name: "Women's Fashion", href: `/categories/womens-fashion` },
  { name: "Men's Fashion", href: `/categories/mens-fashion` },
  { name: "Beauty & Health", href: `/categories/beauty-health` },
];

const Navbar = ({ className }: NavbarProps) => {
  const pathname = usePathname();
  const { status, data: sessionData } = useSession();
const { logOutHandler } = useLogout();
  return (
    <>
      <SponsorBar status={status} sessionData={sessionData} />
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="bg-white">
          <div className="container">
            <nav className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
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
                  <Button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
                  >
                    <Search size={16} />
                  </Button>
                </div>
              </form>

              <NavigationMenu className="hidden xl:flex items-center gap-6">
                <NavigationMenuList className="flex items-center gap-6">
                  {links.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "bg-transparent hover:bg-transparent text-gray-700 hover:text-green-600 font-medium transition-colors",
                            pathname === link.href &&
                              "text-green-600 font-semibold",
                          )}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                  <NavigationMenuItem>
                    <div className="relative group">
                      <Button className="bg-transparent hover:bg-transparent text-md flex items-center gap-1.5 text-gray-700 hover:text-green-600 font-medium transition-colors py-2 shadow-none">
                        Categories
                        <ChevronDown />
                      </Button>
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
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

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
                {status === "unauthenticated" ? (
                  <>
                    <Button
                      asChild
                      variant={"outline"}
                      className="hidden lg:flex items-center gap-2 ml-2 px-5 py-5 rounded-full bg-green-600 hover:bg-green-700 hover:text-white text-white text-xs xl:text-sm font-semibold transition-colors shadow-sm shadow-green-600/20"
                    >
                      <Link href={"/login"}>
                        <User size={16} />
                        Sign In
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link className="hidden lg:flex" href={"/profile"}>
                      {sessionData?.user?.name}
                    </Link>
                    <Button
                      onClick={logOutHandler}
                      variant={"outline"}
                      className="hidden lg:flex items-center gap-2 ml-2 px-5 py-5 rounded-full bg-green-600 hover:bg-green-700 hover:text-white text-white text-xs xl:text-sm font-semibold transition-colors shadow-sm shadow-green-600/20"
                    >
                      <User size={16} />
                      Sign Out
                    </Button>
                  </>
                )}
                <Dialog status={status} sessionData={sessionData} />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar; 