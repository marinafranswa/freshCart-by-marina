import { getUserOrders } from "@/actions/orders.actions";
import OrderCard from "@/components/checkout/OrderCard/OrderCard";
import HeadingSection from "@/components/shared/HeadingSection/HeadingSection";
import { order } from "@/interfaces/allorders.interface";
import { BoxIcon } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AllOrdersPage() {
  const resp = await getUserOrders();
    const { status, ...orders } = resp ?? {};  

  const allOrders : order[] = Object.values(orders);

  return (
    <>
      {allOrders.length > 1 ? (
        <section className="bg-gray-50 min-h-screen py-8">
          <div className="container px-4">
            <HeadingSection
              numberOfItems={allOrders.length}
              title={"All orders"}
              icon={BoxIcon}
              subtitle={"total orders"}
            />

            <div className="space-y-4 px-4 container mx-auto">
              {allOrders.map((order) => (
                <OrderCard order={order} key={order?.id} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="mx-auto px-4 py-8">
          <div className="mb-6 text-sm text-gray-500">Showing 0 items </div>
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <BoxIcon />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500 mb-6">
             Shop again
            </p>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              href="/products"
            >
              View All Products
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
