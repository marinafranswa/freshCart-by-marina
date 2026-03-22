import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/interfaces/products.interface";
import { Box, Check, RotateCcw, Shield, Star, Truck } from "lucide-react";
import Link from "next/link";
interface ReviewCardProps {
  productInfo: Product;
}

export default function ReviewCard({ productInfo }: ReviewCardProps) {
  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Tabs defaultValue="productDetails" className="w-full">
            <TabsList
              variant={"line"}
              className="border-b border-gray-200 py-6"
            >
              <TabsTrigger
                className="py-5 data-active:text-green-600 data-active:bg-green-50/50 font-medium hover:text-green-600 hover:bg-green-100/50"
                value="productDetails"
              >
                <Box /> Product Details
              </TabsTrigger>
              <TabsTrigger
                className="py-5 data-active:text-green-600 data-active:bg-green-50/50 font-medium hover:text-green-600 hover:bg-green-100/50"
                value="reviews"
              >
                <Star />
                Reviews ({productInfo.ratingsQuantity})
              </TabsTrigger>
              <TabsTrigger
                className="py-5 data-active:text-green-600 data-active:bg-green-50/50 font-medium hover:text-green-600 hover:bg-green-100/50"
                value="shipping"
              >
                <Truck /> Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="productDetails">
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      About this Product
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {productInfo.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Product Information
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Category</span>
                          <span className="text-gray-900 font-medium">
                            {productInfo.category.name}
                          </span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Subcategory</span>
                          <span className="text-gray-900 font-medium">
                            {productInfo.subcategory[0].name}
                          </span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Brand</span>
                          <span className="text-gray-900 font-medium">
                            {productInfo.brand.name}
                          </span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Items Sold</span>
                          <span className="text-gray-900 font-medium">
                            {productInfo.sold} sold
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="text-green-600" size={15} />
                          Premium Quality Product
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="text-green-600" size={15} />
                          100% Authentic Guarantee
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="text-green-600" size={15} />
                          Fast &amp; Secure Packaging
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="text-green-600" size={15} />
                          Quality Tested
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900 mb-2">
                        {Math.round(productInfo.ratingsAverage)}
                      </div>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="text-yellow-400">
                            <Star
                              size={16}
                              className={`${i < Math.round(productInfo.ratingsAverage) ? "fill-yellow-400" : ""}`}
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Based on {productInfo.ratingsQuantity} reviews
                      </p>
                    </div>
                    <div className="flex-1 w-full">
                      {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            {5 - idx} star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{
                                width: `${Math.floor(productInfo.ratingsQuantity * (productInfo.ratingsAverage * (5 - idx)))}%`,
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            {Math.floor(
                              productInfo.ratingsQuantity *
                                (productInfo.ratingsAverage * (5 - idx)),
                            )}
                            %
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col items-center py-8">
                      <Star className="fill-gray-500 mb-4 text-gray-500" />
                      <p className="text-gray-500">
                        Customer reviews will be displayed here.
                      </p>
                      <Link
                        href={"/home"}
                        className="mt-4 text-green-600 hover:text-green-700 font-medium"
                      >
                        Write a Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping">
              <div className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <Truck />
                        </div>
                        <h4 className="font-semibold text-gray-900">
                          Shipping Information
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>Free shipping on orders over $50</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>Standard delivery: 3-5 business days</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>
                            Express delivery available (1-2 business days)
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>Track your order in real-time</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <RotateCcw />
                        </div>
                        <h4 className="font-semibold text-gray-900">
                          Returns &amp; Refunds
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>30-day hassle-free returns</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>Full refund or exchange available</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>Free return shipping on defective items</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check color="green" />
                          <span>Easy online return process</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                    <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                      <Shield className="fill-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Buyer Protection Guarantee
                      </h4>
                      <p className="text-sm text-gray-600">
                        Get a full refund if your order doesn&apos;t arrive or
                        isn&apos;t as described. We ensure your shopping
                        experience is safe and secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
