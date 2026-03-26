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
import logoImage from "@/assets/freshcart-logo.49f1b44d.svg";
import {
  Headset,
  Heart,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Session } from "next-auth"; // ✅ adjust to your session type
import { signOut } from "next-auth/react";
import { useLogout } from "@/hooks/useLogout";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "Brands", href: "/brands" },
  { name: "Categories", href: "/categories" },
];


interface DialogProps {
  status: "authenticated" | "unauthenticated" | "loading";
  sessionData?: Session | null;
}

export default function Dialog({ status, sessionData }: DialogProps) {
  const { logOutHandler } = useLogout();
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
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"
              defaultValue=""
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center"
            >
              <Search size={16} />
            </Button>
          </div>
        </form>

        <Separator />

        <nav className="p-4">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
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
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
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
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
            href="/cart"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                <ShoppingCart
                  className="text-green-600 fill-green-600"
                  size={20}
                />
              </div>
              <span className="font-medium text-gray-700">Cart</span>
            </div>
          </Link>
        </div>

        <DrawerFooter>
          <Separator />

          {status === "unauthenticated" ? (
            <div className="p-4 pt-2 grid grid-cols-2 gap-3">
              <Link
                href={"/login"}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="p-4 space-y-1">

              <Link
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                href="/profile"
              >
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="text-gray-600" size={20} />
                </div>
                <span className="font-medium text-gray-700">
                  {sessionData?.user?.name}
                </span>
              </Link>

              <Button
                variant="ghost"
               onClick={logOutHandler}
                className="flex items-center gap-3 px-4 py-7 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors w-full justify-start"
              >
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                  <LogOut className="text-red-600" size={20} />
                </div>
                <span className="font-medium text-red-600">Sign out</span>
              </Button>
            </div>
          )}

          <Link
            className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
            href="/contact"
          >
            <div className="w-10 h-10 rounded-full text-green-600 bg-green-100 flex items-center justify-center">
              <Headset size={22} />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700">
                Need Help?
              </div>
              <div className="text-sm text-green-600">Contact Support</div>
            </div>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
