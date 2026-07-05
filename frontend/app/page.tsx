"use client";

import { useEffect, useState } from "react";
import { healthCheck } from "@/lib/api";

interface BackendStatus {
  connected: boolean;
  message?: string;
  error?: string;
}

export default function Home() {
  const [status, setStatus] = useState<BackendStatus>({
    connected: false,
    message: "Checking backend connection...",
  });

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await healthCheck();
        setStatus({
          connected: true,
          message: response.message || "Connected to backend!",
        });
      } catch (error) {
        setStatus({
          connected: false,
          error: `Failed to connect to backend: ${error instanceof Error ? error.message : String(error)}`,
        });
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-lg max-w-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🏥 Hospital Management System
          </h1>
          <p className="text-gray-600">Connecting Frontend & Backend</p>
        </div>

        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${
          status.connected 
            ? "bg-green-100" 
            : "bg-red-100"
        }`}>
          <span className={`text-3xl ${
            status.connected 
              ? "text-green-600" 
              : "text-red-600"
          }`}>
            {status.connected ? "✓" : "✗"}
          </span>
        </div>

        <div className={`text-center p-4 rounded-lg ${
          status.connected 
            ? "bg-green-50 border border-green-200" 
            : "bg-red-50 border border-red-200"
        }`}>
          <p className={`font-semibold ${
            status.connected 
              ? "text-green-800" 
              : "text-red-800"
          }`}>
            {status.connected ? "Backend Connected" : "Backend Disconnected"}
          </p>
          <p className={`text-sm mt-2 ${
            status.connected 
              ? "text-green-700" 
              : "text-red-700"
          }`}>
            {status.message || status.error}
          </p>
        </div>

        <div className="w-full space-y-2 text-sm text-gray-600">
          <p><strong>Frontend:</strong> http://localhost:3000</p>
          <p><strong>Backend:</strong> http://localhost:5000</p>
          <p><strong>API Base URL:</strong> {process.env.NEXT_PUBLIC_API_URL}</p>
        </div>

        <div className="w-full">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Next.js Documentation →
          </a>
        </div>
      </main>
    </div>
  );
}
