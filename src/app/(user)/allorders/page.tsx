import { getUserOrders } from "@/actions/orders.actions";
import OrderCard from "@/components/checkout/OrderCard/OrderCard";
import HeadingSection from "@/components/shared/HeadingSection/HeadingSection";
import { order } from "@/interfaces/allorders.interface";
import { BoxIcon } from "lucide-react";


export default async function AllOrdersPage() {
  const resp = await getUserOrders();
  const { status, ...orders } = resp;
  

  const allOrders : order[] = Object.values(orders);

  return (
    <section className="bg-gray-50 min-h-screen py-8">
      <div className="container px-4">
        <HeadingSection
          numberOfItems={allOrders.length}
          title={"All orders"}
          icon={BoxIcon} subtitle={"total orders"}
        />

        <div className="space-y-4 px-4 container mx-auto">
          {allOrders.map((order) => (
            <OrderCard order={order} key={order?.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
