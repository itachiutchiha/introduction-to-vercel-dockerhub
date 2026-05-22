import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          Introduction to Vercel and Docker Hub # Semester 1
        </h1>

        <p className="mb-8 text-gray-600">
          This is my first app hosted in vercel.
        </p>

        {/* Change your login name here */}
        <div className="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 font-mono text-sm font-medium text-gray-800">
          Login: oaitlhaj
        </div>
      </div>
    </main>
  );
}
