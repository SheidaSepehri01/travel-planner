// components/LoadingProvider.tsx
"use client";

import { useEffect, useState } from "react";

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-200 w-screen h-screen">
        <h1 className="text-2xl font-bold animate-pulse text-black">
          Loading...
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};
