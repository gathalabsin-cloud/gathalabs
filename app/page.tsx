// =========================
// 📁 app/page.js
// =========================
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <header className="border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gatha Labs</h1>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-blue-400 mb-4">Learn → Build → Earn</p>
          <h2 className="text-5xl font-bold">
            Learn Tech Skills That Actually Get You Hired
          </h2>
          <p className="mt-6 text-slate-400">
            Practical learning for real-world skills.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Start Learning
            </button>
            <button className="border border-slate-700 px-6 py-3 rounded-xl">
              Explore Courses
            </button>
          </div>
        </section>

        <section id="courses" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold mb-8">Featured Course</h3>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h4 className="text-2xl">Computer Basics for Beginners</h4>
            <p className="mt-4 text-slate-400">
              Learn essential computer skills from scratch.
            </p>
            <button className="mt-6 bg-blue-600 px-5 py-2 rounded-lg">
              View Course
            </button>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold">About</h3>
          <p className="text-slate-400 mt-4">
            Gatha Labs helps students go from learning to earning.
          </p>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-slate-400">
          Contact: gathalabs.in@gmail.com
        </div>
      </footer>
    </div>
  );
}