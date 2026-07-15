export const metadata = {
  title: "Courses",
  description:
    "Explore beginner-friendly technology courses from Gatha Labs.",
};

export default function CoursesPage() {
  const courses = [
    {
      title: "Ultimate C++ Programming Course",
      level: "Beginner → Expert",
      duration: "30+ Hours",
      category: "Programming",
      icon: "💻",
      description:
        "Master modern C++ from scratch with OOP, STL, templates, file handling, and real-world projects.",
      button: "Enroll on Udemy",
      url: "https://www.udemy.com/course/ultimate-cpp-programming-course-from-beginner-to-expert/?couponCode=MT260714G2",
    },

    {
      title: "C Programming For Beginners",
      level: "Beginner",
      duration: "20+ Hours",
      category: "Programming",
      icon: "🖥️",
      description:
        "Learn C programming from scratch including variables, loops, arrays, pointers, functions, structures, and file handling.",
      button: "Enroll on Udemy",
      url: "https://www.udemy.com/course/c-programming-for-beginners-master-in-c-language/?couponCode=MT260714G2",
    },

    {
      title: "Data Structures & Algorithms Using C++",
      level: "Intermediate",
      duration: "25+ Hours",
      category: "DSA",
      icon: "📊",
      description:
        "Master arrays, linked lists, stacks, queues, trees, graphs, recursion, sorting, searching, and interview-focused algorithms.",
      button: "Enroll on Udemy",
      url: "https://www.udemy.com/course/data-structures-and-algorithms-using-c-programming/?couponCode=MT260714G2",
    },

    {
      title: "SQL Bootcamp 2026",
      level: "Beginner → Advanced",
      duration: "18+ Hours",
      category: "Database",
      icon: "🗄️",
      description:
        "Learn SQL from scratch including SELECT, JOINs, GROUP BY, subqueries, indexes, constraints, and database design.",
      button: "Enroll on Udemy",
      url: "https://www.udemy.com/course/the-complete-sql-bootcamp-go-from-zero-to-hero/?couponCode=MT260714G2",
    },

    {
      title: "ChatGPT Prompt Engineering Masterclass",
      level: "All Levels",
      duration: "10+ Hours",
      category: "Artificial Intelligence",
      icon: "🤖",
      description:
        "Learn prompt engineering techniques for productivity, coding, business workflows, content creation, and AI automation.",
      button: "Enroll on Udemy",
      url: "https://www.udemy.com/course/chatgpt-prompt-engineering-masterclass-from-beginner-to-pro/?couponCode=MT260714G2",
    },

    {
      title: "SOLID Principles & Software Design",
      level: "Intermediate",
      duration: "8+ Hours",
      category: "Software Engineering",
      icon: "🏗️",
      description:
        "Understand SOLID principles, clean code, software architecture, object-oriented design, and scalable application development.",
      button: "Enroll on Udemy",
      url: "https://www.udemy.com/course/solid-principles-introducing-software-architecture-design/?couponCode=MT260714G2",
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
              className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl">{course.icon}</div>

                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold">
                  {course.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-slate-900 leading-snug mb-4">
                {course.title}
              </h2>

              {/* Level + Duration */}
              <div className="flex items-center justify-between text-sm mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  {course.level}
                </span>

                <span className="text-slate-500">
                  ⏱ {course.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-7 flex-grow">
                {course.description}
              </p>

              {/* Button */}
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {course.button} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}