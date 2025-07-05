// components/LoadingProvider.tsx
"use client";

import Image from "next/image";
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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center  w-screen h-screen">
        <Image
          src={"/assets/images/loading.gif"}
          alt="loading icon"
          width={100}
          height={100}
          unoptimized={true}
        />
        <h1 className="text-2xl font-bold animate-pulse text-black">
          Loading...
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};
