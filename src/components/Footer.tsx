import { Heart } from "lucide-react";
import {useEffect, useState} from 'react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://desola.onrender.com";


type BuildStatus = {
  repo: string;
  url: string;
  timestamp: string;
  daysAgo: number;
} | null;

const Footer = () => {
  const [status, setStatus] = useState<BuildStatus>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStatus = async () => {
      try{
        const res = await fetch(`${API_BASE}/currently-building`);
        if(!res.ok) {
          setStatus(null);
          return;
        }
        const data = await res.json();
        setStatus(data);
      } catch(err) {
        console.error("error fetching build status: ", err);
        setStatus(null);
      } finally {
        setIsLoading(false);
      }
    };

    getStatus();

    // refresh hourly
    const interval = setInterval(getStatus, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const isRecentlyActive = status && status.daysAgo <= 3 && 
      (() => {
    const hour = new Date().getHours(); // 0–23
    return hour >= 6 && hour < 22; // consider daytime as 6AM–10PM
  })();





  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">study the bible🥹</h3>
            {/* have link maybe ? */}
            <p className="text-primary-foreground/80">
              <i>John 8:12 - "No one, sir," she said. Then neither do I condemn you," Jesus declared. "Go now and leave your life of sin"</i>
            </p>
          </div>




          <div className="border-t border-primary-foreground/20 pt-8">
            {/* Status + Built With Row */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* BUILD STATUS (left) */}
              {isLoading ? (
                <p className="text-sm text-primary-foreground/60 italic">checking status...</p>
              ) : isRecentlyActive ? (
                <a
                  href={status?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/10 text-green-500 border border-green-600/30 hover:bg-green-600/20 transition"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  online
                </a>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-600/10 text-gray-400 border border-gray-600/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                  offline
                </div>
              )}

              {/* BUILT WITH (centered horizontally on same line)
              <div className="flex-1 flex justify-center">
                <p className="text-primary-foreground/60 flex items-center gap-2">
                  Built with <Heart className="w-4 h-4 text-forest fill-current" /> and curiosity
                </p>
              </div> */}
            </div>

            {/* COPYRIGHT */}
            <p className="text-primary-foreground/60 text-sm mt-4 text-center">
              desola fujah . 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;