import { useAuth } from "../hooks/useAuth";
import styles from "../styles/ProfileSidebar.module.css";
import Navigation from "../components/Navigation";
import DetailsBar from "../components/DetailsBar";
import { useState } from "react";

export default function AccountPage() {
  const { user, signInWithGoogle, signInWithApple, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  // Mock sign up handler
  const handleSignUp = (e) => {
    e.preventDefault();
    setFormError("Only Google or Apple sign-in is supported in this demo.");
  };

  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen flex flex-col bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/src/assets/images/architecture.jpg')`,
        }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <Navigation />
        <div className="flex items-center justify-center flex-1 py-12 relative z-10">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-center text-slate-900 mb-2">
              Create your account
            </h1>
            <p className="text-center text-slate-500 mb-6">
              Sign up or sign in to manage your bookings
            </p>
            <form onSubmit={handleSignUp} className="flex flex-col gap-4 mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                autoComplete="email"
                disabled
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                autoComplete="new-password"
                disabled
              />
              <button
                type="submit"
                className="bg-cyan-700 text-white font-semibold py-3 rounded-lg hover:bg-cyan-800 transition disabled:opacity-60"
                disabled>
                Create Account (Email sign up coming soon)
              </button>
              {formError && (
                <p className="text-red-400 text-sm text-center">{formError}</p>
              )}
            </form>
            <div className={`${styles.authButtons} mb-4`}>
              <button
                onClick={signInWithGoogle}
                disabled={loading}
                className={`${styles.authButton} ${styles.googleButton}`}>
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
                onClick={signInWithApple}
                disabled={loading}
                className={`${styles.authButton} ${styles.appleButton}`}>
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
              <a href="/rooms" className={styles.guestButton}>
                Browse Rooms
              </a>
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
        </div>
      </div>
      <DetailsBar />
    </div>
  );
}
