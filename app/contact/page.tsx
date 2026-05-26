export const metadata = {
  title: "Contact",
  description:
    "Contact Gatha Labs for collaborations, internships, and learning opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-indigo-600 font-semibold mb-3 uppercase tracking-wider">
            Contact Gatha Labs
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
            Let’s Connect
          </h1>

          <p className="text-slate-500 text-xl mt-6 max-w-3xl leading-8">
            Whether you want to learn, collaborate, contribute, or build
            something together — we’d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-6">📧</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Email
            </h2>

            <p className="text-slate-500 leading-7 mb-6">
              Reach out for collaborations, support, partnerships, or general inquiries.
            </p>

            <a
              href="mailto:gathalabs.in@gmail.com"
              className="text-indigo-600 font-semibold hover:underline"
            >
              gathalabs.in@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-6">📱</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Instagram
            </h2>

            <p className="text-slate-500 leading-7 mb-6">
              Follow Gatha Labs for tech content, updates, tutorials, and learning resources.
            </p>

            <a
              href="https://instagram.com/gathalabs.in"
              target="_blank"
              className="text-indigo-600 font-semibold hover:underline"
            >
              @gathalabs.in
            </a>
          </div>

          {/* Website */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-5xl mb-6">🌐</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Website
            </h2>

            <p className="text-slate-500 leading-7 mb-6">
              Explore tutorials, blogs, courses, and project-based learning resources.
            </p>

            <a
              href="https://gathalabs.in"
              target="_blank"
              className="text-indigo-600 font-semibold hover:underline"
            >
              gathalabs.in
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
          <h2 className="text-4xl font-black mb-6">
            Learn → Build → Earn
          </h2>

          <p className="text-lg leading-8 text-indigo-100 max-w-3xl">
            Gatha Labs is building a modern ecosystem for students who want
            practical skills, real projects, and growth opportunities in tech.
          </p>
        </div>
      </div>
    </main>
  );
}