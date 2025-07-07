import Navigation from "../components/Navigation"
import DetailsBar from "../components/DetailsBar"

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Our Community</h1>
            <p className="text-xl text-slate-300">Coming Soon - Connect with fellow guests</p>
          </div>
        </div>
      </div>
      <DetailsBar />
    </div>
  )
}
