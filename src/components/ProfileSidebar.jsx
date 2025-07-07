"use client"

import { useState, useEffect } from "react"
import { X, User, Settings, Heart, Calendar, LogOut, Shield, CreditCard, Bell } from "lucide-react"
import { useAuth } from "../hooks/useAuth"
import styles from "../styles/ProfileSidebar.module.css"

export default function ProfileSidebar({ isOpen, onClose }) {
  const { user, signInWithGoogle, signInWithApple, signOut, loading } = useAuth()
  const [activeTab, setActiveTab] = useState("profile")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error("Google sign-in error:", error)
    }
  }

  const handleSignInWithApple = async () => {
    try {
      await signInWithApple()
    } catch (error) {
      console.error("Apple sign-in error:", error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      onClose()
    } catch (error) {
      console.error("Sign-out error:", error)
    }
  }

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "bookings", label: "My Bookings", icon: Calendar },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "privacy", label: "Privacy & Security", icon: Shield },
  ]

  const renderAuthSection = () => (
    <div className={styles.authSection}>
      <div className={styles.authHeader}>
        <h2 className={styles.authTitle}>Welcome to Crystal Heaven</h2>
        <p className={styles.authSubtitle}>Sign in to access your account and manage your bookings</p>
      </div>

      <div className={styles.authButtons}>
        <button
          onClick={handleSignInWithGoogle}
          disabled={loading}
          className={`${styles.authButton} ${styles.googleButton}`}
        >
          <svg className={styles.authIcon} viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        <button
          onClick={handleSignInWithApple}
          disabled={loading}
          className={`${styles.authButton} ${styles.appleButton}`}
        >
          <svg className={styles.authIcon} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
            />
          </svg>
          {loading ? "Signing in..." : "Continue with Apple"}
        </button>
      </div>

      <div className={styles.authDivider}>
        <span>or</span>
      </div>

      <div className={styles.guestSection}>
        <p className={styles.guestText}>Continue as guest</p>
        <button onClick={onClose} className={styles.guestButton}>
          Browse Rooms
        </button>
      </div>

      <div className={styles.authFooter}>
        <p className={styles.termsText}>
          By signing in, you agree to our{" "}
          <a href="#" className={styles.termsLink}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className={styles.termsLink}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )

  const renderProfileContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className={styles.tabContent}>
            <div className={styles.profileHeader}>
              <div className={styles.avatarContainer}>
                <img src={user?.photoURL || "https://via.placeholder.com/80"} alt="Profile" className={styles.avatar} />
                <button className={styles.avatarEdit}>Edit</button>
              </div>
              <div className={styles.profileInfo}>
                <h3 className={styles.userName}>{user?.displayName || "Guest User"}</h3>
                <p className={styles.userEmail}>{user?.email || "guest@example.com"}</p>
                <span className={styles.memberSince}>Member since {new Date().getFullYear()}</span>
              </div>
            </div>

            <div className={styles.profileStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Bookings</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>Reviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Favorites</span>
              </div>
            </div>

            <div className={styles.profileActions}>
              <button className={styles.actionButton}>Edit Profile</button>
              <button className={styles.actionButton}>Verify Identity</button>
            </div>
          </div>
        )

      case "bookings":
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>My Bookings</h3>
            <div className={styles.bookingsList}>
              <div className={styles.bookingCard}>
                <div className={styles.bookingImage}>
                  <img src="/images/sea.png" alt="Ocean View Suite" />
                </div>
                <div className={styles.bookingInfo}>
                  <h4>Ocean View Suite</h4>
                  <p>Dec 15-18, 2024</p>
                  <span className={styles.bookingStatus}>Confirmed</span>
                </div>
              </div>
              <div className={styles.bookingCard}>
                <div className={styles.bookingImage}>
                  <img src="/images/hotel-pool.png" alt="Presidential Villa" />
                </div>
                <div className={styles.bookingInfo}>
                  <h4>Presidential Villa</h4>
                  <p>Jan 5-10, 2025</p>
                  <span className={styles.bookingStatus}>Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "favorites":
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>Favorite Rooms</h3>
            <div className={styles.favoritesList}>
              <div className={styles.favoriteCard}>
                <img src="/images/sea.png" alt="Ocean View Suite" />
                <div className={styles.favoriteInfo}>
                  <h4>Ocean View Suite</h4>
                  <p>$299/night</p>
                </div>
                <button className={styles.removeButton}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className={styles.favoriteCard}>
                <img src="/images/architecture.png" alt="Sky Penthouse" />
                <div className={styles.favoriteInfo}>
                  <h4>Sky Penthouse</h4>
                  <p>$449/night</p>
                </div>
                <button className={styles.removeButton}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )

      case "payments":
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>Payment Methods</h3>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentCard}>
                <div className={styles.cardIcon}>💳</div>
                <div className={styles.cardInfo}>
                  <h4>Visa ending in 4242</h4>
                  <p>Expires 12/25</p>
                </div>
                <button className={styles.cardAction}>Edit</button>
              </div>
              <button className={styles.addPaymentButton}>+ Add Payment Method</button>
            </div>
          </div>
        )

      case "notifications":
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>Notifications</h3>
            <div className={styles.notificationSettings}>
              <div className={styles.notificationItem}>
                <div>
                  <h4>Booking Confirmations</h4>
                  <p>Get notified about booking updates</p>
                </div>
                <input type="checkbox" defaultChecked />
              </div>
              <div className={styles.notificationItem}>
                <div>
                  <h4>Special Offers</h4>
                  <p>Receive exclusive deals and promotions</p>
                </div>
                <input type="checkbox" defaultChecked />
              </div>
              <div className={styles.notificationItem}>
                <div>
                  <h4>Check-in Reminders</h4>
                  <p>Reminders before your stay</p>
                </div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        )

      case "settings":
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>Account Settings</h3>
            <div className={styles.settingsList}>
              <div className={styles.settingItem}>
                <h4>Language</h4>
                <select className={styles.settingSelect}>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className={styles.settingItem}>
                <h4>Currency</h4>
                <select className={styles.settingSelect}>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
              <div className={styles.settingItem}>
                <h4>Time Zone</h4>
                <select className={styles.settingSelect}>
                  <option>Eastern Time</option>
                  <option>Pacific Time</option>
                  <option>Central Time</option>
                </select>
              </div>
            </div>
          </div>
        )

      case "privacy":
        return (
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>Privacy & Security</h3>
            <div className={styles.privacySettings}>
              <div className={styles.privacyItem}>
                <h4>Two-Factor Authentication</h4>
                <p>Add an extra layer of security</p>
                <button className={styles.enableButton}>Enable</button>
              </div>
              <div className={styles.privacyItem}>
                <h4>Login Activity</h4>
                <p>See where you're logged in</p>
                <button className={styles.viewButton}>View Activity</button>
              </div>
              <div className={styles.privacyItem}>
                <h4>Data Download</h4>
                <p>Download your account data</p>
                <button className={styles.downloadButton}>Download</button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>{user ? "My Account" : "Sign In"}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className={styles.sidebarContent}>
          {!user ? (
            renderAuthSection()
          ) : (
            <>
              {/* Navigation Menu */}
              <nav className={styles.sidebarNav}>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`${styles.navItem} ${activeTab === item.id ? styles.active : ""}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Content Area */}
              <div className={styles.contentArea}>{renderProfileContent()}</div>

              {/* Sign Out Button */}
              <div className={styles.sidebarFooter}>
                <button onClick={handleSignOut} className={styles.signOutButton}>
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}