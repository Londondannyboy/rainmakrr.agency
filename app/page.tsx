import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Rainmakrr Agency
            </h1>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Crypto & Web3
              </span>
              <br />
              Recruitment Specialists
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
              Connecting exceptional blockchain talent with the most innovative projects in DeFi, NFTs, DAOs, and the decentralized ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#roles"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
              >
                View Open Roles
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all text-lg"
              >
                Submit Your CV
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16">Crypto Recruitment Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "DeFi Protocol Teams",
                  description: "Smart contract developers, protocol engineers, and DeFi specialists for leading protocols.",
                  icon: "💎",
                },
                {
                  title: "NFT & Gaming Studios",
                  description: "Creative technologists, game developers, and marketplace builders for the metaverse.",
                  icon: "🎮",
                },
                {
                  title: "Blockchain Infrastructure",
                  description: "Core developers, node operators, and security researchers for L1s and L2s.",
                  icon: "⛓️",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Web3 Executive Leadership</h3>
              <p className="text-slate-400">
                Beyond technical roles, Web3 projects need strong executive leadership. For <a href="https://fractional.quest" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">fractional executive recruitment</a> — including part-time CFOs and COOs for crypto startups — or dedicated <a href="https://chiefofstaff.quest" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">chief of staff recruitment</a>, explore our specialist partners.
              </p>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16">Featured Crypto Roles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Senior Solidity Developer", company: "Top 10 DeFi Protocol", location: "Remote", salary: "$180k - $250k" },
                { title: "Head of Tokenomics", company: "Series B Web3 Startup", location: "London / Remote", salary: "$200k - $300k" },
                { title: "Blockchain Security Engineer", company: "Leading Audit Firm", location: "Remote", salary: "$150k - $220k" },
                { title: "Web3 Product Manager", company: "NFT Marketplace", location: "New York", salary: "$140k - $180k" },
              ].map((role) => (
                <div
                  key={role.title}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all cursor-pointer"
                >
                  <h4 className="text-lg font-semibold mb-2">{role.title}</h4>
                  <p className="text-slate-400 mb-3">{role.company}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-slate-500">{role.location}</span>
                    <span className="text-amber-400">{role.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Build the Future?</h3>
            <p className="text-slate-400 mb-8">
              Whether you&apos;re hiring or looking for your next role in crypto, we&apos;re here to help.
            </p>
            <a
              href="mailto:crypto@rainmakrr.agency"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
            >
              crypto@rainmakrr.agency
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
