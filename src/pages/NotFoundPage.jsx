export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg text-slate-300 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-cyan-700 rounded-lg text-white font-semibold hover:bg-cyan-800 transition">
        Go Home
      </a>
    </div>
  );
}
