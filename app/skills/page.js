export default function Skills() {
  const skills = [
    { name: "Next.js", level: 45 },
    { name: "PHP", level: 50 },
    { name: "JavaScript", level: 55 },
    { name: "React.js", level: 65 },
    { name: "HTML & CSS", level: 85 },
  ];

  return (
    <div className="min-h-72">
      <div className="max-w-3xl mx-auto p-6 sm:p-8 mt-20 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center sm:text-left">
          Keahlian
        </h2>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium dark:text-black">
                {skill.name}
              </span>
              <span className="text-lg font-medium text-blue-600">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
