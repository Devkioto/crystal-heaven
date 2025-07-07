import {
  Star,
  Users,
  Bed,
  Wifi,
  Car,
  Coffee,
  Waves,
  Bath,
  Tv,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import DetailsBar from "../components/DetailsBar";
import styles from "../styles/RoomsCatalogue.module.css";
import placeholderSvg from "../assets/placeholder.svg";
import OceanViewRoom from "../assets/images/OceanViewRoom.jpg";
import PresidentialVillaRoom from "../assets/images/PresidentialVillaRoom.jpg";
import SkyPenthouseRoom from "../assets/images/SkyPenthouseRoom.jpg";
import room4 from "../assets/images/room4.jpg"; 
import room5 from "../assets/images/room5.jpg";
import room6 from "../assets/images/room6.jpg";
import { useState } from "react";

export default function RoomsCatalogue() {
  // Add state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allRooms = [
    {
      id: 1,
      name: "Ocean View Suite",
      image: OceanViewRoom,
      price: "$299",
      originalPrice: "$349",
      rating: 5,
      guests: 2,
      beds: 1,
      size: "45 m²",
      amenities: [
        "Ocean View",
        "Private Balcony",
        "Mini Bar",
        "Free WiFi",
        "Room Service",
      ],
      features: [
        { icon: Wifi, text: "Free WiFi" },
        { icon: Bath, text: "Luxury Bathroom" },
        { icon: Tv, text: "Smart TV" },
        { icon: Wind, text: "Air Conditioning" },
      ],
      description:
        "Luxurious suite with breathtaking ocean views and premium amenities. Perfect for romantic getaways with a private balcony overlooking the crystal-clear waters.",
      availability: "Available",
      category: "Suite",
    },
    {
      id: 2,
      name: "Presidential Villa",
      image: PresidentialVillaRoom,
      price: "$599",
      originalPrice: "$699",
      rating: 5,
      guests: 4,
      beds: 2,
      size: "120 m²",
      amenities: [
        "Private Pool",
        "Butler Service",
        "Spa Access",
        "Concierge",
        "Limousine Service",
      ],
      features: [
        { icon: Waves, text: "Private Pool" },
        { icon: Car, text: "Butler Service" },
        { icon: Coffee, text: "Premium Minibar" },
        { icon: Wifi, text: "High-Speed WiFi" },
      ],
      description:
        "Ultimate luxury with private pool and exclusive butler service. This presidential villa offers unmatched comfort and privacy for the most discerning guests.",
      availability: "Available",
      category: "Villa",
    },
    {
      id: 3,
      name: "Sky Penthouse",
      image: SkyPenthouseRoom,
      price: "$449",
      originalPrice: "$529",
      rating: 5,
      guests: 3,
      beds: 2,
      size: "85 m²",
      amenities: [
        "City View",
        "Rooftop Terrace",
        "Premium WiFi",
        "Jacuzzi",
        "Private Elevator",
      ],
      features: [
        { icon: Wind, text: "Rooftop Terrace" },
        { icon: Bath, text: "Jacuzzi" },
        { icon: Tv, text: "Entertainment System" },
        { icon: Wifi, text: "Business Center Access" },
      ],
      description:
        "Modern penthouse with stunning city views and rooftop access. Features a private terrace with jacuzzi and panoramic views of the metropolitan skyline.",
      availability: "Limited",
      category: "Penthouse",
    },
    {
      id: 4,
      name: "Garden Paradise",
      image: room4,
      price: "$199",
      originalPrice: "$249",
      rating: 4,
      guests: 2,
      beds: 1,
      size: "35 m²",
      amenities: [
        "Garden View",
        "Free Breakfast",
        "Spa Discount",
        "Yoga Classes",
        "Nature Walks",
      ],
      features: [
        { icon: Coffee, text: "Free Breakfast" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Bath, text: "Rain Shower" },
        { icon: Wind, text: "Garden Terrace" },
      ],
      description:
        "Peaceful retreat surrounded by lush tropical gardens. Perfect for guests seeking tranquility and connection with nature in a serene environment.",
      availability: "Available",
      category: "Standard",
    },
    {
      id: 5,
      name: "Executive Business Suite",
      image: room5,
      price: "$379",
      originalPrice: "$429",
      rating: 5,
      guests: 2,
      beds: 1,
      size: "55 m²",
      amenities: [
        "Business Center",
        "Meeting Room Access",
        "Premium WiFi",
        "Concierge",
        "Airport Transfer",
      ],
      features: [
        { icon: Wifi, text: "High-Speed Business WiFi" },
        { icon: Tv, text: "Conference Setup" },
        { icon: Car, text: "Airport Transfer" },
        { icon: Coffee, text: "Executive Lounge Access" },
      ],
      description:
        "Designed for business travelers with premium amenities and services. Features dedicated workspace and access to executive facilities.",
      availability: "Available",
      category: "Business",
    },
    {
      id: 6,
      name: "Family Deluxe Room",
      image: room6,
      price: "$329",
      originalPrice: "$389",
      rating: 4,
      guests: 6,
      beds: 3,
      size: "75 m²",
      amenities: [
        "Family Pool Access",
        "Kids Club",
        "Babysitting",
        "Game Room",
        "Family Dining",
      ],
      features: [
        { icon: Waves, text: "Family Pool" },
        { icon: Tv, text: "Kids Entertainment" },
        { icon: Coffee, text: "Family Minibar" },
        { icon: Wifi, text: "Parental Controls WiFi" },
      ],
      description:
        "Spacious family accommodation with dedicated children's amenities. Perfect for families with multiple beds and access to family-friendly facilities.",
      availability: "Available",
      category: "Family",
    },
  ];

  const categories = [
    "All",
    "Suite",
    "Villa",
    "Penthouse",
    "Standard",
    "Business",
    "Family",
  ];

  // Filter rooms based on selected category
  const filteredRooms =
    selectedCategory === "All"
      ? allRooms
      : allRooms.filter((room) => room.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className={styles.headerSection}>
        <Navigation />
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Rooms & Suites</h1>
          <p className={styles.pageSubtitle}>
            Discover our collection of luxury accommodations
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.filtersHeader}>
            <h2 className={styles.filtersTitle}>Browse by Category</h2>
            <p className={styles.filtersSubtitle}>
              Find the perfect room for your stay
            </p>
          </div>
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.activeCategory : ""
                }`}
                onClick={() => setSelectedCategory(category)}
                // Add aria-pressed for accessibility
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className={styles.roomsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.roomsGrid}>
            {filteredRooms.map((room) => (
              <div key={room.id} className={styles.roomCard}>
                <div className={styles.roomImageContainer}>
                  <img
                    src={room.image || placeholderSvg}
                    alt={room.name}
                    className={styles.roomImage}
                  />
                  <div className={styles.roomCategory}>{room.category}</div>
                  <div className={styles.roomAvailability}>
                    <span
                      className={`${styles.availabilityDot} ${
                        room.availability === "Limited"
                          ? styles.limited
                          : styles.available
                      }`}></span>
                    {room.availability}
                  </div>
                </div>

                <div className={styles.roomContent}>
                  <div className={styles.roomHeader}>
                    <div>
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
                    <div className={styles.roomPricing}>
                      <span className={styles.originalPrice}>
                        {room.originalPrice}
                      </span>
                      <span className={styles.currentPrice}>{room.price}</span>
                      <span className={styles.perNight}>/night</span>
                    </div>
                  </div>

                  <p className={styles.roomDescription}>{room.description}</p>

                  <div className={styles.roomSpecs}>
                    <div className={styles.roomSpec}>
                      <Users className="w-4 h-4" />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className={styles.roomSpec}>
                      <Bed className="w-4 h-4" />
                      <span>
                        {room.beds} Bed{room.beds > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className={styles.roomSpec}>
                      <span className={styles.roomSize}>{room.size}</span>
                    </div>
                  </div>

                  <div className={styles.roomFeatures}>
                    {room.features.map((feature, index) => (
                      <div key={index} className={styles.roomFeature}>
                        <feature.icon className="w-4 h-4" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.roomAmenities}>
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className={styles.amenityTag}>
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className={styles.moreAmenities}>
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className={styles.roomActions}>
                    <Link
                      to={`/rooms/${room.id}`}
                      className={styles.viewDetailsButton}>
                      View Details
                    </Link>
                    <Link
                      to={`/rooms/${room.id}`}
                      className={styles.bookNowButton}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Bar */}
      <DetailsBar />
    </div>
  );
}
