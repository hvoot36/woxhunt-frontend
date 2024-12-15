"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 3000); // Change this duration to match your GIF animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          {showGif ? (
            <Image 
              src="/woxhunt-logo-anim.gif" 
              width={400} 
              height={400} 
              alt="WoxHunt Logo Animation" 
            />
          ) : (
            <Image 
              src="/woxhunt-logo.svg" 
              width={400} 
              height={400} 
              alt="WoxHunt Logo" 
            />
          )}
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-2 font-sensei">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 font-sensei rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-foreground"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium font-sensei mb-2">
              Password
            </label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 font-sensei rounded-2xl focus:outline-none focus:ring-2 focus:ring-foreground"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-foreground font-sensei text-white py-2 rounded-md hover:bg-foreground-200 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}