export default function CategoriesLoading() {
  return (
    <section>
      <div className="h-48 bg-gray-200 animate-pulse w-full" />
      <div className="container py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-gray-100 animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-xl" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
