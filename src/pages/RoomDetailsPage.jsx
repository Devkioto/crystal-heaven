"use client";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  MapPin,
  Calendar,
  Clock,
  Shield,
  Phone,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import Navigation from "../components/Navigation";
import DetailsBar from "../components/DetailsBar";
import styles from "../styles/RoomDetailsPage.module.css";
import placeholderSvg from "../assets/placeholder.svg";

export default function RoomDetailsPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(2);

  const roomsData = {
    "1": {
      id: 1,
      name: "Ocean View Suite",
      images: [
        require("../assets/images/sea.jpg"),
        require("../assets/images/hotel-pool.jpg"),
        require("../assets/images/architecture.jpg"),
        require("../assets/images/sea.jpg"),
      ],
      price: 299,
      originalPrice: 349,
      rating: 5,
      reviewCount: 127,
      maxGuests: 2,
      beds: 1,
      bedType: "King Size Bed",
      size: "45 m²",
      floor: "12th Floor",
      view: "Ocean View",
      category: "Suite",
      availability: "Available",
      description:
        "Indulge in luxury with our Ocean View Suite, featuring breathtaking panoramic views of the crystal-clear waters. This elegantly appointed suite offers a perfect blend of comfort and sophistication, making it ideal for romantic getaways or special occasions.",
      longDescription:
        "Our Ocean View Suite is a sanctuary of tranquility perched high above the azure waters. The suite features floor-to-ceiling windows that frame the endless ocean horizon, creating a living artwork that changes with the light throughout the day. The spacious layout includes a separate living area with premium furnishings, a luxurious bedroom with a king-size bed dressed in Egyptian cotton linens, and a marble bathroom with a deep soaking tub perfect for unwinding while watching the sunset.",
      amenities: [
        { name: "Ocean View", included: true, icon: MapPin },
        { name: "Private Balcony", included: true, icon: Wind },
        { name: "Mini Bar", included: true, icon: Coffee },
        { name: "Free WiFi", included: true, icon: Wifi },
        { name: "Room Service", included: true, icon: Phone },
        { name: "Smart TV", included: true, icon: Tv },
        { name: "Air Conditioning", included: true, icon: Wind },
        { name: "Safe Deposit Box", included: true, icon: Shield },
        { name: "Luxury Bathroom", included: true, icon: Bath },
        { name: "Daily Housekeeping", included: true, icon: Check },
        { name: "Concierge Service", included: true, icon: Phone },
        { name: "Laundry Service", included: false, icon: X },
      ],
      services: [
        "24/7 Room Service",
        "Daily Housekeeping",
        "Concierge Service",
        "Turndown Service",
        "Welcome Amenities",
        "Complimentary WiFi",
        "In-room Dining",
        "Valet Parking",
      ],
      policies: {
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        cancellation: "Free cancellation up to 24 hours before arrival",
        smoking: "Non-smoking room",
        pets: "Pets not allowed",
        children: "Children welcome",
      },
      nearbyAttractions: [
        "Private Beach - 2 min walk",
        "Spa & Wellness Center - 3 min walk",
        "Fine Dining Restaurant - 1 min walk",
        "Infinity Pool - 2 min walk",
        "Fitness Center - 5 min walk",
      ],
    },
    "2": {
      id: 2,
      name: "Presidential Villa",
      images: [
        require("../assets/images/hotel-pool.jpg"),
        require("../assets/images/sea.jpg"),
        require("../assets/images/architecture.jpg"),
        require("../assets/images/hotel-pool.jpg"),
      ],
      price: 599,
      originalPrice: 699,
      rating: 5,
      reviewCount: 89,
      maxGuests: 4,
      beds: 2,
      bedType: "2 King Size Beds",
      size: "120 m²",
      floor: "Ground Floor",
      view: "Pool & Garden View",
      category: "Villa",
      availability: "Available",
      description:
        "Experience the pinnacle of luxury in our Presidential Villa, featuring a private pool, dedicated butler service, and exclusive amenities. This expansive villa offers unmatched privacy and comfort for the most discerning guests.",
      longDescription:
        "The Presidential Villa represents the ultimate in luxury accommodation, offering an exclusive retreat with unparalleled privacy and personalized service. This magnificent villa features its own private pool surrounded by lush tropical gardens, creating a secluded oasis. The spacious interior includes two master bedrooms, each with en-suite bathrooms featuring marble finishes and premium fixtures. A dedicated butler is available 24/7 to cater to your every need, from arranging private dining experiences to organizing exclusive excursions.",
      amenities: [
        { name: "Private Pool", included: true, icon: Waves },
        { name: "Butler Service", included: true, icon: Car },
        { name: "Spa Access", included: true, icon: Bath },
        { name: "Concierge Service", included: true, icon: Phone },
        { name: "Limousine Service", included: true, icon: Car },
        { name: "Premium Minibar", included: true, icon: Coffee },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Smart TV System", included: true, icon: Tv },
        { name: "Private Garden", included: true, icon: MapPin },
        { name: "24/7 Security", included: true, icon: Shield },
        { name: "Private Chef", included: false, icon: Coffee },
        { name: "Helicopter Transfer", included: false, icon: X },
      ],
      services: [
        "Dedicated Butler Service",
        "Private Pool Maintenance",
        "Exclusive Concierge",
        "Limousine Service",
        "Private Dining Service",
        "Spa Treatments",
        "Personal Shopping",
        "Event Planning",
      ],
      policies: {
        checkIn: "2:00 PM",
        checkOut: "1:00 PM",
        cancellation: "Free cancellation up to 48 hours before arrival",
        smoking: "Smoking allowed in designated areas",
        pets: "Pets allowed with prior arrangement",
        children: "Children welcome with babysitting service available",
      },
      nearbyAttractions: [
        "Private Beach Access - Direct",
        "Exclusive Spa Pavilion - Adjacent",
        "Private Dining Pavilion - On-site",
        "Helicopter Pad - 5 min walk",
        "Golf Course - 10 min drive",
      ],
    },
    "3": {
      id: 3,
      name: "Sky Penthouse",
      images: [
        require("../assets/images/architecture.jpg"),
        require("../assets/images/sea.jpg"),
        require("../assets/images/hotel-pool.jpg"),
        require("../assets/images/architecture.jpg"),
      ],
      price: 449,
      originalPrice: 529,
      rating: 5,
      reviewCount: 156,
      maxGuests: 3,
      beds: 2,
      bedType: "1 King + 1 Queen Bed",
      size: "85 m²",
      floor: "Top Floor",
      view: "360° City & Ocean View",
      category: "Penthouse",
      availability: "Limited",
      description:
        "Soar above the city in our Sky Penthouse, featuring stunning 360-degree views, a private rooftop terrace with jacuzzi, and modern luxury amenities. Perfect for those seeking an elevated experience.",
      longDescription:
        "The Sky Penthouse offers an unparalleled urban retreat high above the bustling city. This architectural marvel features floor-to-ceiling windows on all sides, providing breathtaking 360-degree views of both the sparkling ocean and the dynamic cityscape. The crown jewel is the private rooftop terrace, complete with a luxurious jacuzzi where you can soak under the stars. The interior showcases contemporary design with premium materials, state-of-the-art technology, and artistic touches that create an atmosphere of sophisticated elegance.",
      amenities: [
        { name: "360° City View", included: true, icon: MapPin },
        { name: "Rooftop Terrace", included: true, icon: Wind },
        { name: "Private Jacuzzi", included: true, icon: Bath },
        { name: "Premium WiFi", included: true, icon: Wifi },
        { name: "Private Elevator", included: true, icon: Car },
        { name: "Entertainment System", included: true, icon: Tv },
        { name: "Business Center Access", included: true, icon: Wifi },
        { name: "Climate Control", included: true, icon: Wind },
        { name: "Premium Sound System", included: true, icon: Tv },
        { name: "Telescope", included: true, icon: MapPin },
        { name: "Private Bar", included: false, icon: Coffee },
        { name: "Personal Trainer", included: false, icon: X },
      ],
      services: [
        "Private Elevator Access",
        "Rooftop Terrace Maintenance",
        "Jacuzzi Service",
        "Technology Support",
        "Premium Concierge",
        "City Tour Planning",
        "Transportation Coordination",
        "Event Hosting Support",
      ],
      policies: {
        checkIn: "4:00 PM",
        checkOut: "11:00 AM",
        cancellation: "Free cancellation up to 72 hours before arrival",
        smoking: "Non-smoking room",
        pets: "Small pets allowed with deposit",
        children: "Children over 12 welcome",
      },
      nearbyAttractions: [
        "City Center - 15 min walk",
        "Rooftop Bars - 5 min walk",
        "Shopping District - 10 min walk",
        "Business District - 20 min walk",
        "Cultural Quarter - 12 min walk",
      ],
    },
  };

  const room = roomsData[id];

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Room Not Found</h1>
          <Link to="/rooms" className="text-blue-600 hover:underline">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Image Gallery */}
      <section className={styles.imageGallery}>
        <div className={styles.mainImageContainer}>
          <img
            src={room.images[currentImageIndex] || placeholderSvg}
            alt={room.name}
            className={styles.mainImage}
          />
          <button
            onClick={prevImage}
            className={`${styles.imageNav} ${styles.prevButton}`}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className={`${styles.imageNav} ${styles.nextButton}`}>
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className={styles.imageIndicators}>
            {room.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`${styles.indicator} ${
                  index === currentImageIndex ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className={styles.thumbnailGrid}>
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image || placeholderSvg}
              alt={`${room.name} ${index + 1}`}
              className={`${styles.thumbnail} ${
                index === currentImageIndex ? styles.activeThumbnail : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Room Details */}
      <section className={styles.roomDetails}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            {/* Left Column - Room Info */}
            <div className={styles.roomInfo}>
              <div className={styles.roomHeader}>
                <div>
                  <span className={styles.category}>{room.category}</span>
                  <h1 className={styles.roomTitle}>{room.name}</h1>
                  <div className={styles.ratingSection}>
                    <div className={styles.stars}>
                      {[...Array(room.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className={styles.reviewCount}>
                      ({room.reviewCount} reviews)
                    </span>
                    <span
                      className={`${styles.availability} ${
                        room.availability === "Limited"
                          ? styles.limited
                          : styles.available
                      }`}>
                      {room.availability}
                    </span>
                  </div>
                </div>
                <div className={styles.priceSection}>
                  <span className={styles.originalPrice}>
                    ${room.originalPrice}
                  </span>
                  <span className={styles.currentPrice}>${room.price}</span>
                  <span className={styles.perNight}>/night</span>
                </div>
              </div>

              <p className={styles.description}>{room.description}</p>

              {/* Room Specifications */}
              <div className={styles.specifications}>
                <h3 className={styles.sectionTitle}>Room Specifications</h3>
                <div className={styles.specGrid}>
                  <div className={styles.specItem}>
                    <Users className="w-5 h-5" />
                    <div>
                      <span className={styles.specLabel}>Max Guests</span>
                      <span className={styles.specValue}>
                        {room.maxGuests} Guests
                      </span>
                    </div>
                  </div>
                  <div className={styles.specItem}>
                    <Bed className="w-5 h-5" />
                    <div>
                      <span className={styles.specLabel}>Bed Type</span>
                      <span className={styles.specValue}>{room.bedType}</span>
                    </div>
                  </div>
                  <div className={styles.specItem}>
                    <MapPin className="w-5 h-5" />
                    <div>
                      <span className={styles.specLabel}>Size</span>
                      <span className={styles.specValue}>{room.size}</span>
                    </div>
                  </div>
                  <div className={styles.specItem}>
                    <Wind className="w-5 h-5" />
                    <div>
                      <span className={styles.specLabel}>Floor</span>
                      <span className={styles.specValue}>{room.floor}</span>
                    </div>
                  </div>
                  <div className={styles.specItem}>
                    <MapPin className="w-5 h-5" />
                    <div>
                      <span className={styles.specLabel}>View</span>
                      <span className={styles.specValue}>{room.view}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className={styles.amenitiesSection}>
                <h3 className={styles.sectionTitle}>Amenities & Features</h3>
                <div className={styles.amenitiesGrid}>
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className={`${styles.amenityItem} ${
                        !amenity.included ? styles.notIncluded : ""
                      }`}>
                      <amenity.icon className="w-5 h-5" />
                      <span>{amenity.name}</span>
                      {amenity.included ? (
                        <Check className="w-4 h-4 text-green-600 ml-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className={styles.servicesSection}>
                <h3 className={styles.sectionTitle}>Included Services</h3>
                <div className={styles.servicesList}>
                  {room.services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                      <Check className="w-4 h-4 text-green-600" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className={styles.longDescriptionSection}>
                <h3 className={styles.sectionTitle}>About This Room</h3>
                <p className={styles.longDescription}>{room.longDescription}</p>
              </div>

              {/* Policies */}
              <div className={styles.policiesSection}>
                <h3 className={styles.sectionTitle}>Policies & Information</h3>
                <div className={styles.policiesGrid}>
                  <div className={styles.policyItem}>
                    <Clock className="w-5 h-5" />
                    <div>
                      <span className={styles.policyLabel}>Check-in</span>
                      <span className={styles.policyValue}>
                        {room.policies.checkIn}
                      </span>
                    </div>
                  </div>
                  <div className={styles.policyItem}>
                    <Clock className="w-5 h-5" />
                    <div>
                      <span className={styles.policyLabel}>Check-out</span>
                      <span className={styles.policyValue}>
                        {room.policies.checkOut}
                      </span>
                    </div>
                  </div>
                  <div className={styles.policyItem}>
                    <Calendar className="w-5 h-5" />
                    <div>
                      <span className={styles.policyLabel}>Cancellation</span>
                      <span className={styles.policyValue}>
                        {room.policies.cancellation}
                      </span>
                    </div>
                  </div>
                  <div className={styles.policyItem}>
                    <Shield className="w-5 h-5" />
                    <div>
                      <span className={styles.policyLabel}>Smoking</span>
                      <span className={styles.policyValue}>
                        {room.policies.smoking}
                      </span>
                    </div>
                  </div>
                  <div className={styles.policyItem}>
                    <Users className="w-5 h-5" />
                    <div>
                      <span className={styles.policyLabel}>Pets</span>
                      <span className={styles.policyValue}>
                        {room.policies.pets}
                      </span>
                    </div>
                  </div>
                  <div className={styles.policyItem}>
                    <Users className="w-5 h-5" />
                    <div>
                      <span className={styles.policyLabel}>Children</span>
                      <span className={styles.policyValue}>
                        {room.policies.children}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className={styles.attractionsSection}>
                <h3 className={styles.sectionTitle}>Nearby Attractions</h3>
                <div className={styles.attractionsList}>
                  {room.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className={styles.attractionItem}>
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className={styles.bookingCard}>
              <div className={styles.bookingHeader}>
                <h3 className={styles.bookingTitle}>Reserve Your Stay</h3>
                <div className={styles.bookingPrice}>
                  <span className={styles.bookingCurrentPrice}>
                    ${room.price}
                  </span>
                  <span className={styles.bookingPerNight}>/night</span>
                </div>
              </div>

              <div className={styles.bookingForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Check-in Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className={styles.formInput}>
                    {[...Array(room.maxGuests)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Guest{i > 0 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.priceBreakdown}>
                  <div className={styles.priceRow}>
                    <span>Base Rate</span>
                    <span>${room.price}</span>
                  </div>
                  <div className={styles.priceRow}>
                    <span>Service Fee</span>
                    <span>$25</span>
                  </div>
                  <div className={styles.priceRow}>
                    <span>Taxes</span>
                    <span>${Math.round(room.price * 0.12)}</span>
                  </div>
                  <div className={`${styles.priceRow} ${styles.totalRow}`}>
                    <span>Total</span>
                    <span>
                      ${room.price + 25 + Math.round(room.price * 0.12)}
                    </span>
                  </div>
                </div>

                <button className={styles.bookButton}>Book Now</button>
                <button className={styles.contactButton}>
                  <Phone className="w-4 h-4" />
                  Contact Hotel
                </button>
              </div>

              <div className={styles.bookingFeatures}>
                <div className={styles.feature}>
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Free cancellation</span>
                </div>
                <div className={styles.feature}>
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Best price guarantee</span>
                </div>
                <div className={styles.feature}>
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Instant confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailsBar />
    </div>
  );
}
