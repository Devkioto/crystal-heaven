"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import ProfileSidebar from "./ProfileSidebar";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const ticking = useRef(false);
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { name: "home", path: "/" },
    { name: "rooms", path: "/rooms" },
    { name: "services", path: "/services" },
    { name: "our community", path: "/community" },
    { name: "about us", path: "/about" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (isHovering) {
          setShowNavbar(true);
        } else if (currentScrollY <= 0) {
          setShowNavbar(true); // Always show at top
        } else if (currentScrollY > lastScrollY.current) {
          setShowNavbar(false); // scroll down
        } else if (currentScrollY < lastScrollY.current) {
          setShowNavbar(true); // scroll up
        }
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovering]);

  // Hide navbar if not moving and not hovering, but not at top
  useEffect(() => {
    if (!showNavbar && !isHovering) return;
    let timeout;
    if (showNavbar && !isHovering && window.scrollY > 0) {
      timeout = setTimeout(() => setShowNavbar(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [showNavbar, isHovering]);

  return (
    <>
      <div
        className={`w-full h-20 bg-black/30 backdrop-blur-xl border-b border-cyan-200/20 shadow-lg shadow-cyan-100/20 flex items-center justify-between px-4 md:px-12 relative z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ top: 0, position: "fixed" }}>
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-medium text-2xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-blue-300 hover:bg-clip-text hover:text-transparent">
          Crystal Heaven
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block w-3/5">
          <ul className="flex justify-between items-center h-full">
            {navItems.map((item) => (
              <li key={item.name} className="flex flex-col group">
                <Link
                  to={item.path}
                  className={`relative font-light px-5 py-2 transition-all duration-300
                    ${
                      isActive(item.path)
                        ? "lux-active-nav"
                        : "text-cyan-50 hover:bg-cyan-100/10 hover:text-cyan-200"
                    }`}
                  style={
                    isActive(item.path)
                      ? {
                          background: "transparent",
                          border: "none",
                          boxShadow: "none",
                          color: "#fff",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          borderBottom: "2.5px solid #67e8f9",
                          borderRadius: "0",
                        }
                      : { borderRadius: "0" }
                  }>
                  <span className="relative z-10">{item.name}</span>
                  {/* Progress underline on hover or active */}
                  <span
                    className={`
          absolute left-0 -bottom-0.5 h-0.5 bg-cyan-300 transition-all duration-500
          ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
        `}
                    style={{ borderRadius: "2px" }}
                  ></span>
                </Link>
              </li>
            ))}
            <li className="flex flex-col group">
              <button
                onClick={() => setIsProfileOpen(true)}
                className="text-cyan-50 transition-all duration-700 hover:text-shadow-cyan flex items-center gap-2"
                title="your account">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-cyan-200/30"
                  />
                ) : (
                  <User className="w-5 h-5" />
                )}
                {user && (
                  <span className="hidden lg:inline text-sm">
                    {user.displayName?.split(" ")[0]}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-cyan-200/20 md:hidden">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-6 py-3 text-cyan-50 hover:bg-white/10 transition-colors ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsProfileOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-cyan-50 hover:bg-white/10 transition-colors">
                  <User className="w-5 h-5 inline mr-2" />
                  {user ? user.displayName || "Account" : "Sign In"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Profile Sidebar */}
      <ProfileSidebar
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}
