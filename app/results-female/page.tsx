'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup if user navigates away
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="mt-4 text-lg">Redirecting you to the homepage in 5 seconds...</p>
    </div>
  );
}
