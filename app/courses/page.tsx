export const metadata = {
  title: "Courses",
  description:
    "Explore beginner-friendly technology courses from Gatha Labs.",
};

export default function CoursesPage() {
  const courses = [
    {
      title: "Computer Basics for Beginners",
      description:
        "Learn essential computer skills including hardware, software, internet, files, and digital safety.",
      level: "Beginner",
      duration: "4 Hours",
    },

    {
      title: "Introduction to Internet",
      description:
        "Understand how the internet works, browsers, websites, search engines, and online communication.",
      level: "Beginner",
      duration: "3 Hours",
    },

    {
      title: "Web Development Basics",
      description:
        "Start your journey into HTML, CSS, JavaScript, and modern website development.",
      level: "Beginner",
      duration: "6 Hours",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-indigo-600 font-semibold mb-3 uppercase tracking-wider">
            Gatha Labs
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
            Explore Courses
          </h1>

          <p className="text-slate-500 text-xl mt-6 max-w-3xl leading-8">
            Beginner-friendly technology courses designed to help students
            build practical skills through real-world learning.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                  {course.level}
                </span>

                <span className="text-slate-400 text-sm">
                  {course.duration}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 leading-snug">
                {course.title}
              </h2>

              <p className="text-slate-500 mt-5 leading-7">
                {course.description}
              </p>

              <button className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl font-medium transition">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}