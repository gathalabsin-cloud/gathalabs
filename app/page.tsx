import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-wide whitespace-nowrap">
            Gatha Labs
          </h1>

          <div className="flex items-center gap-5 text-sm text-gray-300 overflow-x-auto">

            <Link href="/blog" className="hover:text-white transition whitespace-nowrap">
              Blog
            </Link>

            <Link href="/courses" className="hover:text-white transition whitespace-nowrap">
              Courses
            </Link>

            <Link href="/about" className="hover:text-white transition whitespace-nowrap">
              About
            </Link>

            <Link href="/contact" className="hover:text-white transition whitespace-nowrap">
              Contact
            </Link>

          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
            Learn → Build → Earn
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            Learn Tech Skills
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              That Actually Matter
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-8">
            Practical courses, beginner roadmaps, and project-based learning
            designed to help students move from learning to earning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-blue-500/20"
            >
              Start Learning
            </Link>

            <Link
              href="/courses"
              className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition duration-300"
            >
              Explore Courses
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-blue-400">100%</h3>
              <p className="text-gray-400 mt-2">Beginner Friendly</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-purple-400">Real</h3>
              <p className="text-gray-400 mt-2">
                Project-Based Learning
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-cyan-400">Future</h3>
              <p className="text-gray-400 mt-2">
                Internships & Community
              </p>
            </div>
          </div>
        </section>

        {/* Featured Course */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-blue-400 mb-2">Featured Course</p>
              <h2 className="text-4xl font-bold">
                Start Your Journey
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-[32px] p-8 hover:border-blue-500/40 transition duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl mb-6">
                💻
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Computer Basics for Beginners
              </h3>

              <p className="text-gray-400 leading-7">
                Learn computer fundamentals, internet skills,
                file management, digital safety, and practical
                real-world tasks.
              </p>

              <Link
                href="/courses"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl font-medium transition"
              >
                View Course
              </Link>
            </div>

            <div className="bg-white/5 border border-dashed border-white/10 rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold">
                More Courses Coming Soon
              </h3>

              <p className="text-gray-400 mt-4 max-w-sm leading-7">
                Web development, career roadmaps, projects,
                and beginner-friendly tech skills.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-blue-400 mb-4">
            About Gatha Labs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Building a modern learning ecosystem for students.
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
            Gatha Labs helps students develop real-world skills
            through project-based learning, practical education,
            and guided roadmaps designed for the modern tech industry.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold">
              Gatha Labs
            </h4>

            <p className="text-gray-500 mt-2">
              Learn → Build → Earn
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            gathalabs.in@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}