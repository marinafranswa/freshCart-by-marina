import { Gift, Mail, Phone, Truck, User, UserPlus } from "lucide-react"
import Link from "next/link";

export default function SponsorBar() {
  return (
    <>
      <div className="hidden lg:block text-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <Truck className="text-green-600 fill-green-600" size={14}  />
                <span>Free Shipping on Orders 500 EGP</span>
              </span>
              <span className="flex items-center gap-2">
                <Gift className="text-green-600 fill-green-600" size={14} />
                <span>New Arrivals Daily</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-500">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
                >
                  <Phone className="text-gray-500 fill-gray-500" size={14} />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
                >
                  <Mail className="text-gray-600" size={14} />
                  <span>support@freshcart.com</span>
                </Link>
              </div>
              <span className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-4">
                <a
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  href="/login"
                >
                  <User className="text-gray-600" size={14} />
                  <span>Sign In</span>
                </a>
                <a
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  href="/register"
                >
                  <UserPlus className="text-gray-500 fill-gray-500" size={14} />
                  <span>Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
