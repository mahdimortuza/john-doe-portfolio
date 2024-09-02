"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Something went wrong.
        </h2>
        <p className="mb-6 text-gray-600">
          We&apos;re sorry for the inconvenience. Please try again or contact
          support if the issue persists.
        </p>
        <button
          onClick={() => reset()}
          className=" bg-themeBlue text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Try Again
        </button>
        <div className="mt-6">
          <p className="text-gray-600">
            Need help?{" "}
            <a href="john@gmail.com" className="text-blue-500 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
