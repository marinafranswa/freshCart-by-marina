import { getUserOrders } from "@/actions/orders.actions";
import OrderCard from "@/components/checkout/OrderCard/OrderCard";
import { order } from "@/interfaces/allorders.interface";
import { BoxIcon } from "lucide-react";
import Link from "next/link";

export default async function AllOrdersPage() {
  const resp = await getUserOrders();
  const { status, ...orders } = resp;
  console.log(orders);
  

  const allOrders : order[] = Object.values(orders);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link className="hover:text-green-600 transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">My Orders</span>
          </nav>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <BoxIcon color="white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
                <p className="text-gray-500 text-sm">
                  Track and manage your {allOrders.length} orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

          <div className="space-y-4 px-4 container mx-auto">
            {allOrders.map(order=><OrderCard order={order} key={order.id}/>)}
          </div>
       
     
    </div>
  );
}
