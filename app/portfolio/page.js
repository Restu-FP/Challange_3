export default function Portfolio() {
  const projects = [
    {
      title: "Website Streaming Anime",
      description: "Sebuah platform yang memungkinkan pengguna untuk menonton dan streaming anime secara online, dengan berbagai pilihan genre dan episode terbaru.",
      imageUrl: "/image/anime.jpg", 
    },
    {
      title: "Website Perpustakaan Online",
      description: "Platform digital yang memungkinkan pengguna untuk mencari, meminjam, dan membaca buku secara online, serta mengakses berbagai sumber daya perpustakaan.",
      imageUrl: "/image/perpustakaan.jpg", 
    },
    {
      title: "Website Games Store",
      description: "Sebuah website yang menyediakan berbagai game Nintendo untuk dibeli dan diunduh, lengkap dengan ulasan dan informasi terbaru tentang game.",
      imageUrl: "/image/nintendo.jpg", 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">Portfolio</h2>
      <p className="text-lg text-gray-700 text-center mb-12">Beberapa proyek saya yang telah saya kerjakan.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}