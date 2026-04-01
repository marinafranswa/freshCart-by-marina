// app/products/loading.tsx
export default function ProductsLoading() {
  return (
    <section>
 
      <div className="h-48 bg-gray-200 animate-pulse w-full" />

      <div className="container py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-gray-100 animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-t-2xl" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-8 bg-gray-200 rounded-full mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
