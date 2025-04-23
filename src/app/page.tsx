'use client';

import { useEffect, useState } from "react";

const Home = () => {
  const [userIP, setUserIP] = useState<string | null>(null);
  const [routerIP, setRouterIP] = useState<string | null>(null);

  useEffect(() => {
    const fetchIPs = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setUserIP(data.ip);

        const routerResponse = await fetch("https://ipinfo.io/json");
        const routerData = await routerResponse.json();
        setRouterIP(routerData.ip);
      } catch (error) {
        console.error("Error fetching IPs:", error);
      }
    };

    fetchIPs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Proxy Illai 🤙</h1>
      <div className="text-center">
        <p className="text-lg">
          <strong>Your IP:</strong> {userIP || "Loading..."}
        </p>
        <p className="text-lg">
          <strong>Router IP:</strong> {routerIP || "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default Home;
