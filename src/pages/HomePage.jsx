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
import DetailsBar from "../components/DetailsBar";
import styles from "../styles/HomePage.module.css";
import placeholderSvg from "../../public/placeholder.svg";
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
          <Link to="/rooms" className={styles.bookButton}>
            <span className={styles.bookButtonText}>Book!</span>
            <Ticket className={`${styles.bookButtonIcon} w-5 h-5`} />
          </Link>
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
