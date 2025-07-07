import {
  Ticket,
  Star,
  Users,
  Bed,
  Utensils,
  Wifi,
  Waves,
  Car,
  Dumbbell,
  SpadeIcon as Spa,
  Coffee,
  Shield,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import DetailsBar from "../components/DetailsBar";
import styles from "../styles/HomePage.module.css";
import placeholderSvg from "/placeholder.svg";
import OceanViewRoom from "../assets/images/OceanViewRoom.jpg";
import PresidentialVillaRoom from "../assets/images/PresidentialVillaRoom.jpg";
import SkyPenthouseRoom from "../assets/images/SkyPenthouseRoom.jpg";
import Navigation from "../components/Navigation";

export default function HomePage() {
  const bestRooms = [
    {
      id: 1,
      name: "Ocean View Suite",
      image: OceanViewRoom,
      price: "$299",
      rating: 5,
      guests: 2,
      beds: 1,
      amenities: ["Ocean View", "Private Balcony", "Mini Bar"],
      description:
        "Luxurious suite with breathtaking ocean views and premium amenities.",
    },
    {
      id: 2,
      name: "Presidential Villa",
      image: PresidentialVillaRoom,
      price: "$599",
      rating: 5,
      guests: 4,
      beds: 2,
      amenities: ["Private Pool", "Butler Service", "Spa Access"],
      description:
        "Ultimate luxury with private pool and exclusive butler service.",
    },
    {
      id: 3,
      name: "Sky Penthouse",
      image: SkyPenthouseRoom,
      price: "$449",
      rating: 5,
      guests: 3,
      beds: 2,
      amenities: ["City View", "Rooftop Terrace", "Premium WiFi"],
      description:
        "Modern penthouse with stunning city views and rooftop access.",
    },
  ];

  const hotelServices = [
    {
      icon: Utensils,
      title: "Fine Dining Restaurant",
      description:
        "Exquisite cuisine crafted by world-class chefs with ocean views",
      features: [
        "International Cuisine",
        "Private Dining",
        "Wine Cellar",
        "24/7 Room Service",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Waves,
      title: "Infinity Pool & Beach",
      description: "Stunning infinity pool overlooking pristine beaches",
      features: [
        "Infinity Pool",
        "Private Beach",
        "Pool Bar",
        "Cabana Service",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Spa,
      title: "Luxury Spa & Wellness",
      description: "Rejuvenate your body and soul with premium spa treatments",
      features: [
        "Full Body Massage",
        "Facial Treatments",
        "Sauna & Steam",
        "Yoga Classes",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description:
        "State-of-the-art equipment with personal training available",
      features: [
        "Modern Equipment",
        "Personal Trainer",
        "Group Classes",
        "24/7 Access",
      ],
      color: "from-green-600 to-green-800",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the property",
      features: [
        "Free WiFi",
        "Business Center",
        "Meeting Rooms",
        "Tech Support",
      ],
      color: "from-slate-600 to-slate-800",
    },
    {
      icon: Car,
      title: "Concierge & Transport",
      description: "Premium concierge services and luxury transportation",
      features: [
        "Airport Transfer",
        "Car Rental",
        "Tour Planning",
        "24/7 Concierge",
      ],
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Coffee,
      title: "Café & Lounge",
      description: "Relaxing café and elegant lounge for all-day dining",
      features: [
        "Specialty Coffee",
        "Light Meals",
        "Cocktail Bar",
        "Live Music",
      ],
      color: "from-amber-600 to-orange-700",
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "24/7 security and safety measures for your peace of mind",
      features: [
        "24/7 Security",
        "Safe Deposit",
        "Medical Assistance",
        "Emergency Response",
      ],
      color: "from-red-600 to-red-800",
    },
  ];

  // Booking bar state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Navigation />
        {/* Welcome Section */}
        <div className={styles.welcomeSection}>
          <p className={styles.welcomeText}>Welcome to</p>
          <p className={styles.hotelName}>Crystal Heaven</p>
          <p className={styles.welcomeSubtext}>
            Our Crystal Heaven is happy for your visit!
          </p>
          {/* Booking Bar Start */}
          <div className="w-full flex justify-center mt-6">
            <form
              className="flex items-center bg-white/80 shadow-xl rounded-full px-10 py-6 gap-0 max-w-6xl w-full relative backdrop-blur-md border border-gray-200"
              onSubmit={(e) => {
                e.preventDefault();
                // You can handle the booking logic here
                alert(
                  `Booking: ${rooms} room(s), ${adults} adult(s), ${children} child(ren), Check-in: ${checkIn}, Check-out: ${checkOut}`
                );
              }}>
              {/* Rooms From */}
              <div className="flex flex-col items-start justify-center pr-8 border-r border-gray-200 min-w-[140px]">
                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase">
                  Rooms From
                </span>
                <span className="text-2xl font-extrabold text-gray-800 mt-1">
                  $ 105
                </span>
              </div>
              {/* Check In */}
              <div className="flex flex-col justify-center items-start px-8 border-r border-gray-200 min-w-[170px]">
                <span className="text-gray-700 font-semibold text-base mb-1">
                  Check In
                </span>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-white text-gray-700 font-medium text-base"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                  style={{ minWidth: 120 }}
                />
              </div>
              {/* Check Out */}
              <div className="flex flex-col justify-center items-start px-8 border-r border-gray-200 min-w-[170px]">
                <span className="text-gray-700 font-semibold text-base mb-1">
                  Check Out
                </span>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-white text-gray-700 font-medium text-base"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                  style={{ minWidth: 120 }}
                />
              </div>
              {/* Rooms */}
              <div className="flex flex-col justify-center items-start px-8 border-r border-gray-200 min-w-[120px]">
                <span className="text-gray-700 font-semibold text-base mb-1">
                  Room
                </span>
                <select
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-white"
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              {/* Adults */}
              <div className="flex flex-col justify-center items-start px-8 border-r border-gray-200 min-w-[120px]">
                <span className="text-gray-700 font-semibold text-base mb-1">
                  Adult
                </span>
                <select
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-white"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              {/* Children */}
              <div className="flex flex-col justify-center items-start px-8 min-w-[120px]">
                <span className="text-gray-700 font-semibold text-base mb-1">
                  Children
                </span>
                <select
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-white"
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}>
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              {/* Book Now Button */}
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-base transition-all duration-200"
                style={{ minWidth: "0", minHeight: "0", padding: 0 }}
                title="Book Now"
              >
                <span className="sr-only">Book Now</span>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="inline-block">
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
          {/* Booking Bar End */}
        </div>
      </div>

      {/* Best Rooms Section */}
      <section className={styles.bestRoomsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Best Rooms</h2>
            <p className={styles.sectionSubtitle}>
              Experience luxury and comfort in our carefully curated premium
              accommodations
            </p>
          </div>

          <div className={styles.roomsGrid}>
            {bestRooms.map((room) => (
              <div key={room.id} className={styles.roomCard}>
                <div className={styles.roomImageContainer}>
                  <img
                    src={room.image || placeholderSvg}
                    alt={room.name}
                    className={styles.roomImage}
                  />
                  <div className={styles.roomPrice}>
                    {room.price}
                    <span>/night</span>
                  </div>
                </div>

                <div className={styles.roomContent}>
                  <div className={styles.roomHeader}>
                    <h3 className={styles.roomName}>{room.name}</h3>
                    <div className={styles.roomRating}>
                      {[...Array(room.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className={styles.roomDescription}>{room.description}</p>

                  <div className={styles.roomDetails}>
                    <div className={styles.roomInfo}>
                      <Users className="w-4 h-4" />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className={styles.roomInfo}>
                      <Bed className="w-4 h-4" />
                      <span>
                        {room.beds} Bed{room.beds > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className={styles.roomAmenities}>
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className={styles.amenityTag}>
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Link to="/rooms" className={styles.bookRoomButton}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Premium Services & Amenities
            </h2>
            <p className={styles.sectionSubtitle}>
              Discover world-class facilities and personalized services designed
              for your ultimate comfort
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {hotelServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div
                  className={`${styles.serviceIcon} bg-gradient-to-br ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.serviceFeature}>
                        <div className={styles.featureDot}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.servicesCallToAction}>
            <h3 className={styles.ctaTitle}>Ready to Experience Luxury?</h3>
            <p className={styles.ctaDescription}>
              Book your stay at Crystal Heaven and enjoy all our premium
              services and amenities
            </p>
            <Link to="/services" className={styles.ctaButton}>
              <MapPin className="w-5 h-5 mr-2" />
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Details Bar */}
      <DetailsBar />
    </div>
  );
}
