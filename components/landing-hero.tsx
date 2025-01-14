import { BarChart3 } from "lucide-react";

export function LandingHero() {
  return (
    <div className="flex flex-col items-center text-center py-16 space-y-8">
      <div className="bg-blue-600 p-4 rounded-full">
        <BarChart3 className="h-12 w-12 text-white" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        ONES Solutions 
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        Your one-stop solution for PAN card verification and information management. Quick, secure, and efficient.
      </p>
    </div>
  );
}