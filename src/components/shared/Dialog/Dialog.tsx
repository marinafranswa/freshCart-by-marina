import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import  logoImage  from "@/assets/freshcart-logo.49f1b44d.svg"

import { Headset, Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

 const links = [
   { name: "Home", href: "/" },
   { name: "Shop", href: "/products" },
   { name: "Brands", href: "/brands" },
   { name: "Categories", href: "/categories" },
 ];

export default function Dialog() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="lg:hidden ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
          <Menu size={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="overflow-y-auto overflow-x-hidden">
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
              <Image
                alt="FreshCart"
                width={160}
                height={31}
                className="h-8 w-auto"
                src={logoImage.src}
              />
              <DrawerClose asChild>
                <Button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <X className="text-gray-600" size={24} />
                </Button>
              </DrawerClose>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <form className="p-4 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
              defaultValue=""
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center"
            >
              <Search />
            </Button>
          </div>
        </form>
        <Separator />
        <nav className="p-4">
          <div className="space-y-1">
            {links.map((link, i) => (
              <Link
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
        <Separator />
        <div className="p-4 space-y-1">
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            href="/wishlist"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <Heart className="text-red-500" size={20} />
              </div>
              <span className="font-medium text-gray-700">Wishlist</span>
            </div>
          </Link>
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            href="/cart"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                <ShoppingCart
                  className="text-emerald-600 fill-emerald-600"
                  size={20}
                />
              </div>
              <span className="font-medium text-gray-700">Cart</span>
            </div>
          </Link>
        </div>

        <DrawerFooter>
          <div className="p-4 space-y-1">
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                href="/login"
              >
                Sign In
              </Link>
              <Link
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors"
                href="/register"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <Link
            className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-emerald-50 transition-colors"
            href="/contact"
          >
            <div className="w-10 h-10 rounded-full text-green-600 bg-emerald-100 flex items-center justify-center">
              <Headset size={22}/>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700">
                Need Help?
              </div>
              <div className="text-sm text-emerald-600">Contact Support</div>
            </div>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
