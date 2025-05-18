import { Suspense } from 'react';
import ClientHome from '@/components/ClientHome';
export default function Home() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 text-center py-8">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2 text-gray-600">Loading...</p>
      </div>
    }>
      <ClientHome />
    </Suspense>
  );
}