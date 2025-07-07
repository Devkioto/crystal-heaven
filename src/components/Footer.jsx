export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-200 py-6 px-4 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-semibold tracking-wide">
          Crystal Heaven &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="/services" className="hover:text-cyan-400 transition">
            Services
          </a>
          <a href="/community" className="hover:text-cyan-400 transition">
            Community
          </a>
          <a href="/account" className="hover:text-cyan-400 transition">
            Account
          </a>
          <a href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
        <div className="text-xs text-slate-400">All rights reserved.</div>
      </div>
    </footer>
  );
}
