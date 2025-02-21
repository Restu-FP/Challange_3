export default function Services() {
  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 mt-20 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center sm:text-left">
        Layanan
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center sm:text-left">
        Saya menyediakan jasa pengembangan website berbasis Next.js dan React.
      </p>

      <div className="space-y-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-6 p-4 border-l-4 border-blue-600 bg-gray-50 rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
              <span className="font-semibold text-lg">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const servicesData = [
  {
    title: "Pengembangan Website",
    description:
      "Membuat website yang responsif dan dinamis dengan menggunakan Next.js dan React.js.",
  },
  {
    title: "Pembuatan API",
    description:
      "Menyediakan API yang efisien dan scalable untuk keperluan aplikasi web.",
  },
  {
    title: "Desain UI/UX",
    description:
      "Membantu merancang tampilan antarmuka yang menarik dan user-friendly untuk aplikasi web.",
  },
];
