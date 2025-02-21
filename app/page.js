"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r pt-20 from-blue-500 to-indigo-600 text-white dark:from-red-700 dark:to-blue-700">
      {/* Hero Section */}
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Selamat Datang di <span className="text-yellow-300">My Kisah</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto">
          Saya <span className="font-semibold">Restu Fajar Pratama</span>,
          mahasiswa Sistem Informasi yang tertarik dalam pengembangan web
          modern.
        </p>
        <p className="mt-2 opacity-80">
          Jelajahi keahlian, pengalaman, dan proyek saya di sini!
        </p>

        {/* Call to Action */}
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() => router.push("/portfolio")}
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
          >
            Lihat Portfolio
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="bg-transparent border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-gray-900 transition"
          >
            Hubungi Saya
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10">
        <Image
          src="/image/Profile.gif"
          alt="Profile"
          width={180}
          height={180}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>
    </div>
  );
}
