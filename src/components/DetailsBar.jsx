import { Map, UserPlus, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function DetailsBar() {
  const detailItems = [
    { icon: Map, title: "maps", href: "/our-maps" },
    { icon: UserPlus, title: "register", href: "/account" },
    { icon: Phone, title: "contact us", href: "/contact" },
  ]

  return (
    <div className="fixed left-0 top-1/3 bg-black/10 backdrop-blur-3xl w-fit h-48 px-3 py-5 rounded-r-lg transform -translate-x-8 hover:translate-x-0 transition-transform duration-700 z-10 overflow-hidden">
      <ul className="h-full flex flex-col justify-between">
        {detailItems.map((item) => (
          <li key={item.title}>
            <Link
              to={item.href}
              className="text-teal-700 hover:text-white hover:drop-shadow-lg transition-all duration-500"
              title={item.title}
            >
              <item.icon className="w-6 h-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
