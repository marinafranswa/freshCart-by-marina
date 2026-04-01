"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Monitor,
  Package,
  Phone,
} from "lucide-react";
import { order } from "@/interfaces/allorders.interface";
import Image from "next/image";

interface orderCardProps {
  order: order;
}

export default function OrderCard({ order }: orderCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-full overflow-hidden border border-gray-100 shadow-sm">
      <CardContent className="p-0">
        <div className="flex items-start gap-4 p-6 pb-4">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center text-2xl">
              <Image
                src={order.cartItems[0].product.imageCover}
                alt={order.cartItems[0].product.title}
                width={160}
                height={160}
              />
            </div>
            {order.cartItems.length > 1 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                +{order.cartItems.length - 1}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {order.isPaid ? (
              <Badge
                className={`bg-yellow-200 text-amber-700 border-0 gap-1.5 mb-2 font-semibold`}
              >
                <Clock /> processing
              </Badge>
            ) : (
              <Badge
                className={`bg-green-200 text-emerald-700 border-0 gap-1.5 mb-2 font-semibold`}
              >
                <Check /> Paid
              </Badge>
            )}
            <div className="flex items-center gap-1 text-xl font-bold text-gray-900">
              <span className="text-gray-400 font-normal">#</span>
              {order.id}
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {order.createdAt.split("T")[0]}
              </span>
              <span className="text-gray-200">•</span>
              <span className="flex items-center gap-1">
                <Package size={12} /> {order.cartItems.length}
                {order.cartItems.length === 1 ? "item" : "items"}
              </span>
              <span className="text-gray-200">•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} />
              </span>
            </div>
          </div>

          <Button variant="outline" size="icon" className="shrink-0 rounded-lg">
            <Monitor size={16} className="text-gray-500" />
          </Button>
        </div>

        {/* Price + Toggle button */}
        <div className="flex items-center justify-between px-6 pb-5">
          <span className="text-2xl font-bold text-gray-900">
            {order.totalOrderPrice}
            <span className="text-sm font-medium text-gray-400">EGP</span>
          </span>

          {expanded ? (
            <Button
              onClick={() => setExpanded(false)}
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg gap-2"
            >
              Hide <ChevronUp size={14} />
            </Button>
          ) : (
            <Button
              onClick={() => setExpanded(true)}
              variant="outline"
              className="rounded-lg gap-2 text-white bg-green-600 hover:bg-green-700 hover:text-white"
            >
              Details <ChevronDown size={14} />
            </Button>
          )}
        </div>

        {/* Expanded content */}
        {expanded && (
          <>
            <Separator />

            {/* Order Items */}
            <div className="p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                <span className="w-5 h-5 rounded-md bg-green-600 flex items-center justify-center">
                  <Package size={11} className="text-white" />
                </span>
                Order Items
              </h3>

              <div className="space-y-3">
                {order.cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
                  >
                    <div className="w-12 h-12 rounded-lg border border-gray-100 bg-white flex items-center justify-center text-xl shrink-0">
                      <Image
                        src={item.product.imageCover}
                        alt={item.product.title}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {item.product.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.count} × {item.price} EGP
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-base font-bold text-gray-900">
                        {item.count * item.price}
                      </p>
                      <p className="text-xs text-gray-400">EGP</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-2 gap-4 px-6 pb-6">
              {/* <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                <h4 className="flex items-center gap-1.5 text-sm font-bold text-gray-900 mb-3">
                  <MapPin size={13} className="text-green-600" />
                  Delivery Address
                </h4>
                <p className="text-sm font-semibold text-gray-900">
                  {order.shippingAddress.city}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {order.shippingAddress.details}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                  <Phone size={11} /> {order.shippingAddress.phone}
                </p>
              </div> */}

              <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
                <h4 className="flex items-center gap-1.5 text-sm font-bold text-gray-900 mb-3">
                  <Clock size={13} className="text-amber-500" />
                  Order Summary
                </h4>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-gray-700">
                      {order.cartItems.reduce(
                        (sum, item) => sum + item.price * item.count,
                        0,
                      )}{" "}
                      EGP
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">
                      {order.shippingPrice === 0
                        ? "Free"
                        : `${order.shippingPrice} EGP`}
                    </span>
                  </div>
                  <Separator className="bg-yellow-200" />
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>Total</span>
                    <span>{order.totalOrderPrice} EGP</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
