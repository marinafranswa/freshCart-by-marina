import { Headset, RotateCcw, ShieldHalf, Truck } from "lucide-react";

export default function Banners() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Truck />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Free Shipping
              </h3>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <ShieldHalf />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Secure Payment
              </h3>
              <p className="text-xs text-gray-500">100% secure transactions</p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <RotateCcw />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Easy Returns
              </h3>
              <p className="text-xs text-gray-500">14-day return policy</p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-purple-50 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Headset />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                24/7 Support
              </h3>
              <p className="text-xs text-gray-500">Dedicated support team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
