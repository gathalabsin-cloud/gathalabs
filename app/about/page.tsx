export const metadata = {
  title: "About",
  description:
    "Learn about Gatha Labs and our mission to help students learn tech skills.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-indigo-600 font-semibold mb-3 uppercase tracking-wider">
            About Gatha Labs
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
            Building a Modern Learning Ecosystem
          </h1>

          <p className="text-slate-500 text-xl mt-6 leading-8 max-w-4xl">
            Gatha Labs is a modern educational platform focused on helping
            students move from learning to earning through project-based
            learning, tutorials, blogs, and practical tech education.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl border border-gray-200 p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-8">
              Our mission is to make technology education beginner-friendly,
              practical, and accessible for students who want real-world skills
              instead of only theoretical learning.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What We Build
            </h2>

            <ul className="space-y-4 text-slate-600">
              <li>• Beginner-friendly courses</li>
              <li>• Technology tutorials & blogs</li>
              <li>• Project-based learning</li>
              <li>• Career roadmaps</li>
              <li>• Internship opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
          <h2 className="text-4xl font-black mb-6">
            Learn → Build → Earn
          </h2>

          <p className="text-lg leading-8 text-indigo-100 max-w-3xl">
            We believe students learn best by building real projects and
            applying skills practically. Gatha Labs is designed to guide that
            journey step-by-step.
          </p>
        </div>
      </div>
    </main>
  );
}