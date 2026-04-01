
import Image from "next/image";
import  image  from "@/assets/2e5810ff3e-e750761ebcd4ae5907db.png";
import { Clock, Lock,  Shield, Star, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginComponent from "@/components/LoginComponent/LoginComponent";
import Link from "next/link";

export default function LoginPage() {

  return (
    <>
      <section className="py-12">
        <div className="container py-16 mx-auto px-4" id="login-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="hidden lg:block">
              <div className="text-center space-y-6">
                <Image
                  width={800}
                  height={400}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  alt={
                    "fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
                  }
                  src={image.src}
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    FreshCart - Your One-Stop Shop for Fresh Products
                  </h2>
                  <p className="text-lg text-gray-600">
                    Join thousands of happy customers who trust FreshCart for
                    their daily grocery needs
                  </p>
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Truck className="text-green-600 me-1" size={16} />
                      Free Delivery
                    </div>
                    <div className="flex items-center">
                      <Shield className="text-green-600 me-1" size={16} />
                      Secure Payment
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-green-600 me-1" size={16} />
                      24/7 Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Welcome Back!
                  </h1>
                  <p className="text-gray-600">
                    Sign in to continue your fresh shopping experience
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <Button
                    variant={"ghost"}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-6 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                  >
                    <span className="font-semibold text-gray-700">
                      Continue with Google
                    </span>
                  </Button>
                  <Button
                    variant={"ghost"}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-6 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                  >
                    <span className="font-semibold text-gray-700">
                      Continue with Facebook
                    </span>
                  </Button>
                </div>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      OR CONTINUE WITH EMAIL
                    </span>
                  </div>
                </div>
                {/* Login form*/}

                <LoginComponent />

                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-600">
                    New to FreshCart?
                    <Link
                      className="text-green-600 hover:text-green-700 ms-2 font-semibold cursor-pointer"
                      href={"/register"}
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Lock size={12} className="me-1" />
                    SSL Secured
                  </div>
                  <div className="flex items-center">
                    <Users size={12} className="me-1" />
                    50K+ Users
                  </div>
                  <div className="flex items-center">
                    <Star size={12} className="me-1" />
                    4.9 Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
