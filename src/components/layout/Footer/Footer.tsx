import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/freshcart-logo.49f1b44d.svg";
import {
  CreditCard,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Brands", href: "/brands" },
    { label: "Electronics", href: `/categories/` },
    { label: "Men's Fashion", href: `/categories/` },
    { label: "Women's Fashion", href: `/categories/` },
  ],
  account: [
    { label: "My Account", href: "/profile" },
    { label: "Order History", href: "/profile/allorders" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Shopping Cart", href: "/cart" },
    { label: "Sign In", href: "/login" },
    { label: "Create Account", href: "/register" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns & Refunds", href: "/return" },
    { label: "Track Order", href: "/track-order" },
  ],
  helpLegal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie" },
  ],
};

export default function Footer() {
  return (
    <>
      <CommonBanner variant="emerald" />
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <Link className="inline-block mb-6" href="/">
                <div className="bg-white rounded-lg px-4 py-2 inline-block">
                  <Image
                    alt="FreshCart Logo"
                    width={160}
                    height={31}
                    className="h-8 w-auto"
                    src={logoImage.src}
                  />
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>
              <div className="space-y-3 mb-6">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <Phone className="text-emerald-600" size={18} />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <Mail className="text-emerald-600" size={18} />
                  <span>support@freshcart.com</span>
                </Link>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="text-emerald-600" size={22} />
                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Shop</h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Account</h3>
              <ul className="space-y-3">
                {footerLinks.account.map((acc) => (
                  <li key={acc.label}>
                    <Link
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      href={acc.href}
                    >
                      {acc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((supp) => (
                  <li key={supp.label}>
                    <Link
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      href={supp.href}
                    >
                      {supp.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.helpLegal.map((help) => (
                  <li key={help.label}>
                    <Link
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      href={help.href}
                    >
                      {help.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © 2026 FreshCart. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CreditCard size={20} />
                  <span>Visa</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CreditCard size={20} />
                  <span>Mastercard</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CreditCard size={20} />
                  <span>PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
