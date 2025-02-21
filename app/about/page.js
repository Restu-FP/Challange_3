import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 mt-20 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 h-40 relative">
          <Image
            src="/image/Profile.gif"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Restu Fajar Pratama
          </h1>
          <p className="text-xl text-gray-600 opacity-90">
            Mahasiswa Sistem Informasi
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-600">Tentang Saya</h2>
        <p className="text-gray-700 mt-2 text-lg">
          Saya adalah mahasiswa Sistem Informasi di Ma'soem University yang
          memiliki ketertarikan dalam pengembangan web dan teknologi modern.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-600">Kontak</h2>
        <div className="flex flex-col gap-4 mt-4">
          <p className="flex items-center gap-3 text-lg text-gray-700">
            <Mail className="w-6 h-6 text-blue-600" />
            <a
              href="mailto:restufajarpratama69@gmail.com"
              className="hover:text-blue-800 transition-colors"
            >
              restufajarpratama69@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3 text-lg text-gray-700">
            <Phone className="w-6 h-6 text-blue-600" />
            <a
              href="tel:+6285700648159"
              className="hover:text-blue-800 transition-colors"
            >
              +62 857-0064-8159
            </a>
          </p>
        </div>
      </div>

      {/* Education Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Pendidikan
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold dark:text-black">
              Ma'soem University
            </h3>
            <p className="text-gray-600">Sistem Informasi</p>
            <p className="text-gray-500 text-sm">2023 - Sekarang</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-black">
              SMK Negeri 6 Garut
            </h3>
            <p className="text-gray-600">Teknik Komputer dan Jaringan</p>
            <p className="text-gray-500 text-sm">2020 - 2023</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-black">
              SMP Negeri 1 Nagreg
            </h3>
            <p className="text-gray-600">Sekolah Menengah Pertama</p>
            <p className="text-gray-500 text-sm">2017 - 2020</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-black">
              SD Negeri 1 Nagreg
            </h3>
            <p className="text-gray-600">Sekolah Dasar</p>
            <p className="text-gray-500 text-sm">2011 - 2017</p>
          </div>
        </div>
      </section>
    </div>
  );
}
