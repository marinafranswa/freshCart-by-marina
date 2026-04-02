export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
      <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-green-600 animate-spin" />
    </div>
  );
}
